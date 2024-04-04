import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: "String",
    required: [true, "Please enter a username"],
    unique: true,
  },
  email: {
    type: "String",
    required: [true, "Please enter an email "],
    unique: true,
  },
  password: {
    type: "String",
    required: [true, "Please enter a username"],
  },
  isVerified: {
    type: "Boolean",
    default: false,
  },
  isAdmin: {
    type: "Boolean",
    default: false,
  },
  forgotPasswordToke: String,
  forgotPasswordExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

//Special case for next js is to handle this case we need to check whether the model is created earlier then give that model otherwise create a new model
const User = mongoose.models.users || mongoose.models("users", userSchema);

export default User;
