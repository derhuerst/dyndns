'use strict'

const prompt = require('prompt-sync')
const keychain = require('keychain')
const cfg = require('config')

pw = prompt.hide('Please enter your INWX password. It will be stored in the keychain.\n')

keychain.setPassword({
	  type:     'internet'
	, service:  'INWX'
	, account:  cfg.user
	, password: pw
}, (err) => {
	if (err) {
		process.stderr.write(err.message + '\n')
		return process.exit(1)
	}
	process.stdout.write('Your password has been stored.')
});
