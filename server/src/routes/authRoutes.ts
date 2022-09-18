import express from "express";
import { login, register, updateUser } from "../controllers/authController";

export const authRouter = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/update-user").patch(updateUser);
