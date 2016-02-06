# Dynamic DNS helper

An HTTP server, talking to the INWX *Domain Robot*. Gets the current IP address as the `ip` query parameter. The INWX password is read from the Keychain.

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
