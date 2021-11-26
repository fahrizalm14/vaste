import { response } from "express";
import { nanoid } from "nanoid";
// import QRCode from "qrcode";

const getController = async (req, res = response) => {
  try {
    const token = nanoid(5);
    res.status(200).json({
      status: "success",
      message: "connected",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "An error occurred trying to process your request",
    });
  }
};

export { getController };
