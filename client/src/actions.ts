"use server"
import {sessionOptions, SessionData} from "@/lib"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
export const getSession = async () => {
const session = await getIronSession<SessionData>(cookies(), sessionOptions)
return session;
}

export const login = async (formData:FormData) => {
   const session = await getSession()
   const email = formData.get("email") as string
   const password = formData.get("password") as string

   console.log(email, password)


   session.email = email

  await session.save()

  redirect("/profile")


}

export const signup = async () => {
    
}


export const logout = async () => {

}