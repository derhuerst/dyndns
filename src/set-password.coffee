prompt =   require 'prompt-sync'
keychain = require 'keychain'
config =   require 'config'



process.stdout.write 'Please enter your INWX password. It will be stored in the keychain.\n'
password = prompt.prompt
	hidden: true



keychain.setPassword {
	type:		'internet'
	service:	'INWX'
	account:	config.user
	password:	password
}, (err) ->
	if err
		process.stderr.write err.message + '\n'
		process.exit 1
		return
	process.stdout.write 'Your password has been stored.'
	process.exit 0
