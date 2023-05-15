import { Schema, model, models } from "mongoose";

const UserScheme = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email required"],
  },
  username: {
    type: String,
    required: [true, "Username required"],
    // match: [
    //   /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    //   "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    // ],
  },
  image: String,
});

//CHECK IF MODEL IS CREATED OR CREATE A NEW MODEL
const User = models.User || model("User", UserScheme);

export default User;
