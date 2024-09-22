import { getIronSession } from 'iron-session';
const sessionOptions = {
    password: process.env.SECRET_KEY,
    cookieName: "zoss-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }
    
  };


export const getSession = async (req, res, next) => {
    try {
        const session = await getIronSession(req, res, sessionOptions);
        res.json(session);
    } catch (error) {
        res.status(500).send("Error retrieving session");
    }


}

  

  