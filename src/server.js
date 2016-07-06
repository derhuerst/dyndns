'use strict'

const http = require('http')
const cfg = require('config')
const keychain = require('keychain')
const url = require('url')
const qs = require('querystring')
const updateARecord = require('./update-a-record')



const server = http.createServer((req, res) => {
	const err = (message, code) => {
		if (!message) message = 'Unknown Error'
		console.error(message)
		res.statusCode = code || 500
		return res.end(message)
	}

	keychain.getPassword({
		type: 'internet',
		service: 'INWX',
		account: cfg.user
	}, (err, pw) => {
		if (err) return err('Something went wrong.', 500)

		const query = qs.parse(url.parse(req.url).query)
		if (!query || !query.ip) return err('Missing IP address.', 400)
		const ip = query.ip

		updateARecord(cfg.user, pw, cfg.namespace, cfg.entry, ip)
		.then((responses) => {
			for (let res of responses)
				console.log(res.name + ' -> ' + res.content)
		}, () =>
			err('Something went wrong.', 500))
	})
})

server.listen(cfg.port)
console.info(`Server listening on ${cfg.port}.`)
