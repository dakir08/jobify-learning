import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "../models/User";
import { CustomApiError } from "../errors/customApiError";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomApiError("please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });

  if (!!userAlreadyExists) {
    throw new CustomApiError("Email already in use");
  }

  const user = await User.create(req.body);

  const token = user.createJwt();

  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
    },
    token,
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if missing email and password
  if (!email || !password) {
    throw new CustomApiError("Please provide all values");
  }

  // Find exist user
  const user = await User.findOne({ email }).select("+password");
  // Check if not found user
  if (!user) {
    throw new CustomApiError("Invalid Credentials", StatusCodes.UNAUTHORIZED);
  }

  // compare password
  const isMatchedPassword = await user.comparePassword(password);
  // Check if password not correct
  if (!isMatchedPassword) {
    throw new CustomApiError("Invalid Credentials", StatusCodes.UNAUTHORIZED);
  }

  // create token and send back to response
  const token = user.createJwt();
  user.password = "";
  res.status(StatusCodes.OK).json({ user, token });
};

export const updateUser = async (req: Request, res: Response) => {
  res.send("update user");
};
