import bcryptjs from "bcryptjs";
import User from "../../../models/User.js";

export const doSignup = async (req, res, next) => {
  try {
    const {name, email, password, userType, profileImage} = req.body;


    // Check if the email already exists
    const isEmailAlreadyExist = await User.findOne({ email: email });
    if (isEmailAlreadyExist) {
      return res.status(400).json({
        status: 400,
        message: "Already have an account!",
      });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPass = await bcryptjs.hash(password, salt);

    // Create the new user
    const newUser = await User.create({
      name: name,
      profileImage: profileImage,
      email: email,
      password: hashedPass,
      userType: userType,
    });

    res.status(201).json({
      status: 201,
      success: true,
      message: "User created successfully",
      user: {
        userID:newUser._id || null,
        name: newUser.name || null,
        email: newUser.email || null,
        profileImage: newUser.profileImage || null,
        userType: newUser.userType || null,
      },
    });
  } catch (err) {
    console.error("Signup error:", err);
    next(err);
  }
};
