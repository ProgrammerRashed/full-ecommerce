import axios from "axios";


export const uploadImage = async (image: File): Promise<string | null> => {
  if (image.size > 1024 * 1024) { // 1MB in bytes
    console.error("File size must be less than 1MB");
    return null; 
  }
  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await axios.post("http://localhost:8080/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.imageUrl; // Assuming the server sends back the image URL
  } catch (error: any) {
    console.error("Error uploading image:", error.response?.data || error.message);
    return null;
  }
};
