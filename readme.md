# Dynamic DNS helper

An HTTP server, talking to the INWX *Domain Robot*. Gets the current IP address as the `ip` query parameter. The INWX password is read from the Keychain.

To get started:

```shell
git clone https://github.com/derhuerst/dyndns.git ~/.dyndns
cd ~/.dyndns
npm install
npm run activate
```

To remove everything:

```shell
cd ~/.dyndns
npm run deactivate
cd ..
rm -rf ~/.dyndns
```
