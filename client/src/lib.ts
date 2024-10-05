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

