import { Cloudinary } from "cloudinary-core";
import axios from "axios"

const cloudinary = new Cloudinary({
    cloud_name: import.meta.env.VITE_CLOUD_NAME,
});

export const uploadToCloudinary = async (file) => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
        formData.append("folder", "Internship Assignment");
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        const imageUrl = cloudinary.url(response.data.public_id);
        return imageUrl
    } catch (error) {
        console.error("Upload error:", error);
    }
};
