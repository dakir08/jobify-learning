import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "../../models/User";
import { CustomApiError } from "../errors/customApiError";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomApiError("please provide all values");
  }

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req: Request, res: Response) => {
  res.send("login user");
};

export const updateUser = async (req: Request, res: Response) => {
  res.send("update user");
};
