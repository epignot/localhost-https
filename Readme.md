# Localhost on https

## Motivation
Simple way to re-expose a local server over https

## Setup

- Clone this repository
- Install dependencies 
```
npm i
```
- Install certificates
```
brew install mkcert
mkcert -install
mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem "localhost" "0.0.0.0" "127.0.0.1"
```
- Start the server you want to proxy
- Change `SOURCE_PORT` in `index.js` if it doesn't match your server port
- Run with `npm run start`
- Go to [https://localhost:8009](https://localhost:8009)