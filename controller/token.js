import { response } from "express";
import { nanoid } from "nanoid";
import QRCode from "qrcode";

const getController = async (req, res = response) => {
  try {
    const token = nanoid(12);
    // With async/await
    const generateQR = async (text) => {
      try {
        console.log(await QRCode.toDataURL(text));
        return await QRCode.toDataURL(text);
      } catch (err) {
        console.error(err);
      }
    };
    const QRString = await generateQR(token);
    res.status(200).json({
      status: "success",
      message: "connected",
      token,
      QRString,
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
