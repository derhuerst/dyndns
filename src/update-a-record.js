'use strict'

const inwx = require('inwx')

const updateARecord = (user, pw, ns, entry, ip) => new Promise((yay, nay) => {
	inwx({api: 'production', user, password: pw}, (api) => {
		const filter = {type: 'A', name: entry + '.' + ns}
		api.nameserverRecordHelper(ns, 'update', ip, {content: ip},
			(res) => {api.close(); yay(res)},
			(err) => {api.close(); nay(err)}
		)
	})
})

module.exports = updateARecord
