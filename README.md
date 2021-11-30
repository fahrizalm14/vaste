<!-- <center> -->
<div align="center">

[![logo vaste](https://vaste.s3.ap-southeast-1.amazonaws.com/apple-icon.png 'logo vaste')](https://vaste.site 'logo vaste')

![](https://img.shields.io/github/stars/erzetid/vaste)
![](https://img.shields.io/github/forks/erzetid/vaste)
![](https://img.shields.io/github/tag/erzetid/vaste)
![](https://img.shields.io/github/release/erzetid/vaste)
![](https://img.shields.io/github/issues/erzetid/vaste)
![MIT License](https://img.shields.io/static/v1.svg?label=📜%20License&message=MIT&color=informational)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/paypalme/fahrizalm14)
<a href="https://vaste.site/">

<h1 align="center">VASTE - The World's Easiest and Safest Text Copier.</h1>

  </a>
</div>
<!-- <center/> -->

#

Vaste is an open-source copy/paste software multiplatform written in node.js, and run without a database.
All texts can only be seen on the client side, the server only as a data sender/broker.

- Try it: <a href="https://vaste.site">vaste.site<a/>
- <a href="https://github.com/erzetid/vaste/issues">Report a bug<a/>

## 🛠️ How it Works

**📚 Library :**

- <a href="https://reactjs.org/">React Js<a/>
- <a href="https://socket.io">Socket.Io<a/>
- <a href="https://github.com/ai/nanoid">Nanoid<a/>
- <a href="hhttps://qr-code-styling.com">QRCode Styling<a/>

**🌎 Browser :**

- the browser generates a random token as the recipient address of the text to paste/copy.
- token will be displayed as qrcode and plain text.
- (copy scenario) browser will display plain text with the help of socket.io according to connected token.
- (paste scenario) plain text that has been written in the text area will be sent according to the address of the connected token.

## ⌨️ Development

```bash
$ git clone git@github.com:erzetid/vaste.git
$ cd vaste
$ npm install
$ cd client/
$ npm install
$ cd ..
$ npm run dev
```

Open your browser and visit http://127.0.0.1:3000

## 🖥️ Proxying API Requests in Development

> Note: this feature is available with `react-scripts@0.2.3` and higher.

People often serve the front-end React app from the same host and port as their backend implementation.<br>
For example, a production setup might look like this after the app is deployed:

```
GET /           - static server returns ./client/build/index.html with React app

GET /api/token  - Generate token

POST /api/text  - Send text to receiver
content-type: application/json

{
    "token": "token",
    "textContent": "Text Content"
}
```

Such setup is **not** required. However, if you **do** have a setup like this, it is convenient to write requests like `fetch('/api/token')` without worrying about redirecting them to another host or port during development.

To tell the development server to proxy any unknown requests to your API server in development, add a `proxy` field to your `./client/package.json`, for example:

```js
  "proxy": "http://localhost:3001",
```

This way, when you `fetch('/api/token')` in development, the development server will recognize that it’s not a static asset, and will proxy your request to `http://localhost:3001/api/token` as a fallback. The development server will **only** attempt to send requests without `text/html` in its `Accept` header to the proxy.

Conveniently, this avoids [CORS issues](http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations) and error messages like this in development:

```
Fetch API cannot load http://localhost:3001/api/token. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Keep in mind that `proxy` only has effect in development (with `npm start`), and it is up to you to ensure that URLs like `/api/token` point to the right thing in production. You don’t have to use the `/api` prefix. Any unrecognized request without a `text/html` accept header will be redirected to the specified `proxy`.

The `proxy` option supports HTTP, HTTPS and WebSocket connections.<br>
If the `proxy` option is **not** flexible enough for you, alternatively you can:

- [Configure the proxy yourself](#configuring-the-proxy-manually)
- Enable CORS on your server ([here’s how to do it for Express](http://enable-cors.org/server_expressjs.html)).
- Use [environment variables](#adding-custom-environment-variables) to inject the right server host and port into your app.

## 👏 Contributing

We welcome all contributions.You can submit any ideas as pull requests or as GitHub issues. If you'd like to improve code, check out the Development Instructions and have a good time!

## 🎁 Donate

Support this application, to become dApps (Decentralized Applications)

<p>

Bitcoin :`15kHKSH7JaRHWGTQmza3E8aomxT2g5D373`<p/>

<p>

Ethereum :`0xa9ac91a2546d9403a8efb873a3cac382d6271b93`<p/>

<br>

<h1 align="center"> 😀😀😀 Thank's ❤️❤️❤️ </h1>
