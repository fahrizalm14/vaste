import { validationResult } from "express-validator";

const validateInput = (req, res, next) => {
  try {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      const { errors } = err;
      const errMsg = errors.map((err) => err.msg);
      return res.status(400).json({
        status: "error",
        message: errMsg[0],
      });
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "error",
      message: "An error occurred trying to process your request",
    });
  }
};

export { validateInput };
