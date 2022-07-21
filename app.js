import dotenv from "dotenv";
import Server from "./models/Server.js";

dotenv.config();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
const app = new Server(port || 3000);

app.listen();

export default app;
