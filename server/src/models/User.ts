import { Schema, model, Model } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface User {
  name: string;
  email: string;
  password: string;
  lastName: string;
  location: string;
}

export interface UserMethods {
  createJwt(): string;
}

const schema = new Schema<User>({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    select: false,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "lastName",
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "my city",
  },
});

schema.pre<User>("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

schema.method("createJwt", function createJwt() {
  return jwt.sign(
    { userId: this._id },
    process.env.JWT_SECRET ?? "notASecret",
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
});

type UserModel = Model<User, {}, UserMethods>;

export const User = model<User, UserModel>("User", schema);
