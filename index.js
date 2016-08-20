'use strict'

const http = require('http')
const cfg = require('config')
const url = require('url')
const qs = require('querystring')
const dyndns = require('dyndns-client')

const update = dyndns(cfg.server.hostname, cfg.server.port, cfg.server.key)



const server = http.createServer((req, res) => {
	const err = (message, code) => {
		if (!message) message = 'Unknown Error'
		console.error(message)
		res.statusCode = code || 500
		return res.end(message)
	}

	const query = qs.parse(url.parse(req.url).query)
	if (!query || !query.ip) return err('Missing IP address.', 400)
	const ip = query.ip

	update('A', ip)
	.then(
		(ip) => {
			console.log(ip)
			res.statusCode = 202
			res.end('Success.')
		},
		(e) => err(e.message, 500))
})

server.listen(cfg.port, (err) => {
	if (err) return console.error(err)
	console.info(`Server listening on ${cfg.port}.`)
})
