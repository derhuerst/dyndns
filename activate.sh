#!/usr/bin/env sh

mkdir -p ~/Library/LaunchDaemons
ln -s ~/.dyndns/launchctl.plist ~/Library/LaunchDaemons/com.derhuerst.dyndns.plist
launchctl load ~/Library/LaunchDaemons/com.derhuerst.dyndns.plist
