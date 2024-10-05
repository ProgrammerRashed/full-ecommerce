import { SessionOptions } from "iron-session";

export interface SessionData {
  userID: string | number;
  name: string;
  profileImage?: string;
  userType: string;
  email: string;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "zoss-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

export async function getProductData(page:number,skip:number,limit:number,shortBy:string) {
    // 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
  const res = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}
