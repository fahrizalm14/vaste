import dotenv from "dotenv";
import Server from "./models/Server.js";

dotenv.config();
const app = new Server(3001);

app.listen();

export default app;
