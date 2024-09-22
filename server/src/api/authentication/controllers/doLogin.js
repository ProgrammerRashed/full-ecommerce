import bcryptjs from "bcryptjs"
import User from "../../../models/User.js"

export const doLogin = async (req, res, next) => {
  try {
    const bodyUser = req.body;
    
    const dbUser = await User.findOne({
      email: bodyUser.email,
    });

    if (!dbUser) {
      res.status(400).json({
        status: 400,
        message: "User Doesn't Exist!!",
      });
      return;
    }
    const validPassword = await bcryptjs.compare(
      bodyUser.password,
      dbUser.password
    );
    if (!validPassword) {
      res.status(400).json({
        status: 400,
        message: "Invalid Login Credentials!!",
      });
      return;
    }

    const user = {
      id: dbUser._id.toString(),
      name:dbUser.name,
      email:dbUser.email,
      profileImage: dbUser.profileImage,
      userType: dbUser.userType
    }
    
   
    res.send({ success: true, user, message: "login successful" });
  } catch (err) {
    next(err);
  }
};

