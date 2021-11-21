import express from "express";
import cors from "cors";
import path from "path";
import tokenRoutes from "../routes/token.js";
import textRoutes from "../routes/textContent.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      homepage: "/",
      token: "/api/token",
      textContent: "/api/text",
    };
    this.view = {
      static: path.join(path.resolve(), "./client/public"),
      public: path.join(path.resolve(), "./client/public/index.html"),
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());

    this.app.use(express.static(this.view.static));
  }

  routes() {
    this.app.use((err, req, res, next) => {
      if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        console.error(err);
        return res.status(400).send({ status: "error", message: err.message }); // Bad request
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
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}

export default Server;
