import {model, Schema} from "mongoose"

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  }
  
});

const User = model("User", UserSchema);

export default User;
