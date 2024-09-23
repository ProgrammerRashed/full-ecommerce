"use server";
import { uploadImage } from "@/lib/uploadImage";
import { sessionOptions, SessionData } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

import axios from "axios";
import { redirect } from "next/navigation";
export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
};

export const login = async (
  prevState: {
    error: undefined | string;
    status: undefined | string;
  },
  formData: FormData
) => {
  const session = await getSession();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user = {
    email,
    password,
  };

  try {
    const response = await axios.post(
      "http://localhost:8080/login",
      user, // Send as JSON
      {
        headers: {
          "Content-Type": "application/json", // Set header to indicate JSON payload
        },
      }
    );

    // Save session data from response
    session.email = response.data.user.email;
    session.name = response.data.user.name;
    session.profileImage = response.data.user.profileImage;
    session.userID = response.data.user.id;
    session.userType = response.data.user.userType;
    await session.save();

    return { error: null, status: "Success" };
  } catch (error: any) {
    return { error: error.response.data.message || error.message, status: "Failed" };
  }
};

export const signup = async (
  prevState: {
    error: undefined | string;
    status: undefined | string;
  },
  formData: FormData
) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const image = formData.get("image") as File;
  const confirmedPass = formData.get("confirm-password") as string;

  let imageUrl =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-user-profile-vector-png-image_4830519.jpg";

  // Ensure password matches confirm-password
  if (password !== confirmedPass) {
    return { error: "Password does not match!", status: "Failed" };
  }

  // Upload image if provided
  if (image && image.size > 0) {

    if (image.size > 1024 * 1024) { // 1MB in bytes
      return { error: "File size must be less than 1MB", status: "Failed" };
     
    }


    imageUrl = await uploadImage(image) || "https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-user-profile-vector-png-image_4830519.jpg";;
    if (!imageUrl) {
      return { error: "Error uploading image!", status: "Failed" };
    }
  }

  const user = {
    name,
    email,
    profileImage: imageUrl,
    password,
    userType: "Customer",
  };

  try {
    await axios.post("http://localhost:8080/signup", user, {
      headers: {
        "Content-Type": "application/json", // Ensure JSON is sent in the request
      },
    });
    return { error: null, status: "Success" };
  } catch (error: any) {
    return { error: error.response?.data?.message || "Error during signup!", status: "Failed" };
  }
};


export const logout = async () => {
const session = await getSession()
  session.destroy()
  redirect("/")
};
