import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    credits: {
      type: Number,
      default: 100,
    },
  },
  { timestamps: true },
);

userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema);
export default User;
