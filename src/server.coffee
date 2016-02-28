http =          require 'http'
url =           require 'url'
querystring =   require 'querystring'
config =        require 'config'
keychain =      require 'keychain'

updateARecord = require './update-a-record'





server = http.createServer()

server.on 'request', (req, res) ->
	onError = (message = 'Unknown Error', code = 500) ->
		console.error message
		res.statusCode = code
		res.end message

	ip = querystring.parse(url.parse(req.url)?.query)?.ip
	if not ip then return onError 'No IP address given.', 400

	query = { type: 'internet', service: 'INWX', account: config.user }
	keychain.getPassword query, (err, password) ->
		if err then return onError err.message, 500

		updateARecord config.user, password, 'jannisr.de', 'zuhause', ip
		.then (responses) ->
			for response in responses
				console.log "#{response.name} -> #{response.content}"
				res.end "#{response.name} -> #{response.content}"
		.catch (err) -> onError err.message, 500

server.listen config.port
console.log "Server listening on #{config.port}."
