import express from "express";
import { check, validationResult } from "express-validator";
import { validateInput } from "../middleware/validator.js";
import { postController } from "../controller/textContent.js";

const router = express.Router();

router.post(
  "/",
  [
    check("token", "Token is required").notEmpty(),
    check("textContent", "Text is required")
      .notEmpty()
      .isLength({ max: 10050 })
      .withMessage("Text max 10.000 characters"),
    validateInput,
  ],
  postController
);

export default router;
