import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file: File): Promise<string> {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: "pm-movies-uploads",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result!.secure_url);
          },
        )
        .end(buffer);
    });
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}
