"use server";
import { uploadImage } from "@/lib/uploadImage";
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
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password");
  const image = formData.get("image") as File;
  const confirmedPass = formData.get("confirm-password") as string;

  let imageUrl =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-user-profile-vector-png-image_4830519.jpg";

  if (password !== confirmedPass) {
    return { error: "Password does not match!" };
  }

  if (image) {
    imageUrl =
      (await uploadImage(image)) ||
      "https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-user-profile-vector-png-image_4830519.jpg";
    if (!imageUrl) {
      return { error: "Error uploading image!" };
    }
  }

  const user = {
    name,
    email,
    profileImage: imageUrl,
    password,
    confirmedPass,
    userType: "Customer",
  };

  try {
   await axios.post("http://localhost:8080/signup",user);
  } catch (error) {
    return { error: "Error during signup!" };
  }

  redirect("/login")
};

export const logout = async () => {};
