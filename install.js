'use strict'

const startup = require('user-startup')
const cfg = require('config')

startup.create('dyndns', '/usr/local/bin/npm', ['start'])
