startup = require 'user-startup'
config =  require 'config'



startup.remove "dyndns-#{config.id}"
