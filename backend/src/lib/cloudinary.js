import {v2 as cloudinary} from "cloudinary";
import { config } from "dotenv";

config()

cloudinary.config({
    cloud_name:process.env.CLOUDNIRAY_PROCESS_NAME,
    api_key:process.env.CLOUDNIRAY_API_KEY,
    api_secret:process.env.CLOUDNIRAY_API_SECRET,
});

export default cloudinary;