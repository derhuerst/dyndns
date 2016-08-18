# dyndns

**An HTTP server, using [`dyndns-client`](https://github.com/derhuerst/dyndns-client)** to talk to [`dyndns-server`](https://github.com/derhuerst/dyndns-server). Gets the current IP address as the `ip` query parameter.

[![dependency status](https://img.shields.io/david/derhuerst/dyndns.svg)](https://david-dm.org/derhuerst/dyndns#info=dependencies)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/dyndns.svg)](https://david-dm.org/derhuerst/dyndns#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/dyndns.svg)


## Installation

```bash
git clone https://github.com/derhuerst/dyndns.git ~/.dyndns
cd ~/.dyndns
npm install --production
# create config/production.js
export NODE_ENV=production
npm start
npm run install-service
```

To remove everything:

```shell
cd ~/.dyndns
npm stop
npm run uninstall-service
cd ..
rm -rf .dyndns
```
