# Dynamic DNS helper

An HTTP server, talking to the INWX *Domain Robot*. Gets the current IP address as the `ip` query parameter. The INWX password is read from the Keychain.

[![dependency status](https://img.shields.io/david/derhuerst/dyndns.svg)](https://david-dm.org/derhuerst/dyndns#info=dependencies)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/dyndns.svg)](https://david-dm.org/derhuerst/dyndns#info=devDependencies)

To get started:

```shell
git clone https://github.com/derhuerst/dyndns.git ~/.dyndns
cd ~/.dyndns
npm install
npm run set-password # store the password in the keychain
npm start # start the server
```

To remove everything:

```shell
cd ~/.dyndns
npm stop # stop the server
cd ..
rm -rf ~/.dyndns
```
