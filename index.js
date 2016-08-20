'use strict'

const http = require('http')
const cfg = require('config')
const url = require('url')
const qs = require('querystring')
const dyndns = require('dyndns-client')
const publicIp = require('public-ip')

const update = dyndns(cfg.server.hostname, cfg.server.port, cfg.server.key)



const server = http.createServer((req, res) => {
	const err = (err) => {
		const message = err.message || 'Unknown Error'
		console.error(message)
		res.statusCode = err.statusCode || 500
		res.end(message)
		throw err
	}


	Promise.all([
		publicIp.v4(),
		publicIp.v6()
	])
	.then(([ipv4, ipv6]) => Promise.all([
		update('A', ipv4),
		update('AAAA', ipv6)
	]), err)
	.then(([ipv4, ipv6]) => {
		console.log(['v4', ipv4, 'v6', ipv6].join('\t'))
		res.statusCode = 202
		res.end('Success.')
	}, err)
})

server.listen(cfg.port, (err) => {
	if (err) return console.error(err)
	console.info(`Server listening on ${cfg.port}.`)
})
