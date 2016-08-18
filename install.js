'use strict'

const startup = require('user-startup')
const cfg = require('config')

startup.create('dyndns-' + cfg.id, '/usr/local/bin/npm', ['start'])
