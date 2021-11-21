import dotenv from "dotenv";
import Server from "./models/Server.js";

dotenv.config();
const app = new Server();

app.listen();

export default app;
