import { response } from "express";

const postController = async (req, res = response) => {
  try {
    const { token, textContent } = req.body;
    req.io.emit(token, { textContent });
    res.status(200).json({
      status: "success",
      message: "delivered",
      token,
      textContent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "An error occurred trying to process your request",
    });
  }
};

export { postController };
