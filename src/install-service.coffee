prompt =  require 'prompt-sync'
startup = require 'user-startup'
config =  require 'config'



startup.create "dyndns-#{config.id}", '/usr/local/bin/npm', ['start']
