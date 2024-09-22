"use server";
import { sessionOptions, SessionData } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import axios from "axios";
export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
};

export const login = async (formData: FormData) => {
  const session = await getSession();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  // DATABASE OPARATION
  console.log(email, password);

  session.email = email;

  await session.save();

  redirect("/profile");
};

export const signup = async (
  prevState: {
    error: undefined | string;
  },
  formData: FormData
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const image = formData.get("image") as File;
  const confirmedPass = formData.get("confirm-password");
  let imageUrl =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-user-profile-vector-png-image_4830519.jpg";
  if (password !== confirmedPass) {
    return { error: "Password does not match!" };
  }
  const dataToSend = new FormData();
  dataToSend.append("image", image); // Append the image file



  if (image) {
console.log("Image Size"+image.size)
if (image.size > 1024 * 1024) { // 1MB in bytes
   return { error: "File size must be less than 1MB" };
}
    try {
      const response = await axios.post(
        "http://localhost:8080/upload",
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      imageUrl = response.data.imageUrl;
    } catch (errorMessage) {
      console.log(errorMessage);
      return { error: "Error uploading image!" };
    }
  }

  const user = {
    name,
    email,
    image: imageUrl,
    password,
    confirmedPass,
  };

  
};

export const logout = async () => {};
