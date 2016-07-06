# dyndns

**An HTTP server, talking to the INWX *Domain Robot*.** Gets the current IP address as the `ip` query parameter. The INWX password is read from the Keychain.

[![dependency status](https://img.shields.io/david/derhuerst/dyndns.svg)](https://david-dm.org/derhuerst/dyndns#info=dependencies)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/dyndns.svg)](https://david-dm.org/derhuerst/dyndns#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/dyndns.svg)

To get started:

```shell
git clone https://github.com/derhuerst/dyndns.git ~/.dyndns
cd ~/.dyndns
npm install --production
npm run set-password # store the password in the keychain
npm start # start the server
npm install-service # put it into autostart
```

To remove everything:

```shell
cd ~/.dyndns
npm stop # stop the server
npm uninstall-service # remove from autostart
cd ..
rm -rf .dyndns
```
