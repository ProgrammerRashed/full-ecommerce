import axios from "axios";

export const uploadImage = async (image: File): Promise<string | null> => {
  if (image.size > 1024 * 1024) { // 1MB in bytes
    console.error("File size must be less than 1MB");
    return null; // Handle size limit error
  }

  const dataToSend = new FormData();
  dataToSend.append("image", image); // Append the image file

  try {
    const response = await axios.post("http://localhost:8080/upload", dataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data && response.data.imageUrl) {
      return response.data.imageUrl; // Return the uploaded image URL
    } else {
      console.error("Image upload response does not contain imageUrl", response.data);
      return null; // Handle missing image URL in response
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    return null; // Handle any other errors
  }
};
