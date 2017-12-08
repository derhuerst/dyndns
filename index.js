'use strict'

const http = require('http')
const cfg = require('config')
const url = require('url')
const qs = require('querystring')
const dyndns = require('dyndns-client')
const publicIp = require('public-ip')

const update = dyndns(cfg.server.hostname, cfg.server.port, cfg.server.key)



const server = http.createServer((req, res) => {
	const onError = (err) => {
		console.error(err)
		res.statusCode = err.statusCode || 500
		res.end(err.message || 'Unknown Error')
	}


	Promise.all([
		publicIp.v4(),
		publicIp.v6()
	])
	.then(([ipv4, ipv6]) => Promise.all([
		update('A', ipv4),
		update('AAAA', ipv6)
	]))
	.then(([ipv4, ipv6]) => {
		console.log(['v4', ipv4, 'v6', ipv6].join('\t'))
		res.statusCode = 200 // FritzBox doesn't understand 202 🙄
		res.end('Success.')
	})
	.catch(onError)
})

server.listen(cfg.port, (err) => {
	if (err) return console.error(err)
	console.info(`Server listening on ${cfg.port}.`)
})
