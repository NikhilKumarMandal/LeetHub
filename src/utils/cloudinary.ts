import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (
  localFilePath: string
): Promise<UploadApiResponse | null> => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
      fs.unlinkSync(localFilePath);
    return null;
  }
};

const deleteFromCloudinary = async (
  public_id: string,
  resource_type: "image"
): Promise<UploadApiResponse | null> => {
  try {
    if (!public_id) {
      return null;
    }

    const response = await cloudinary.uploader.destroy(public_id, {
      invalidate: true,
      resource_type,
    });

    return response;
  } catch (error) {
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };