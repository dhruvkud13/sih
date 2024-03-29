import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
      unique: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    // profileimg: {
    //   type: "string",
    // },
    typeofuser:{
      type: "string",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);