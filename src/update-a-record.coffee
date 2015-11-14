inwx =			require 'inwx'



module.exports = updateARecord = (user, password, namespace, entry, ip) ->
	new Promise (resolve, reject) ->
		inwx { api: 'production', user: user, password: password }, (api) ->

			filter = { type: 'A', name: "#{entry}.#{namespace}" }
			ip = { content: ip }
			api.nameserverRecordHelper namespace, 'update', ip, filter, (responses) ->
				api.close()
				resolve responses
			, (err) ->
				api.close()
				reject err
