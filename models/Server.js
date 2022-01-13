import express from 'express';
import cors from 'cors';
import path from 'path';
import tokenRoutes from '../routes/token.js';
import textRoutes from '../routes/textContent.js';
import { createServer } from 'http';
import { Server as IoServer } from 'socket.io';
class Server {
  constructor() {
    this.app = express();

    this.httpServer = createServer(this.app);
    this.io = new IoServer(this.httpServer, { cors: '*' });
    // eslint-disable-next-line no-undef
    this.port = process.env.PORT;
    this.paths = {
      homepage: '/',
      token: '/api/token',
      textContent: '/api/text'
    };
    this.view = {
      static: path.join(path.resolve(), './client/build'),
      public: path.join(path.resolve(), './client/build/index.html')
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      req.io = this.io;
      return next();
    });

    this.app.use(express.static(this.view.static));
  }

  routes() {
    this.app.use((err, req, res, next) => {
      if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error(err);
        return res.status(400).send({ status: 'error', message: err.message }); // Bad request
      }
      next();
    });
    this.app.use(this.paths.token, tokenRoutes);
    this.app.use(this.paths.textContent, textRoutes);
    this.app.get(this.paths.homepage, (req, res) => {
      res.sendFile(this.view.public);
    });
  }

  listen() {
    this.io.on('connection', (socket) => {
      console.log(socket.id);
      socket.emit('toClient', { token: 'This token', message: 'This message' });
    });
    this.httpServer.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}

export default Server;
