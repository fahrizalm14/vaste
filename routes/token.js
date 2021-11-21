import express from "express";
import { getController } from "../controller/token.js";

const router = express.Router();

router.get("/", getController);

export default router;
