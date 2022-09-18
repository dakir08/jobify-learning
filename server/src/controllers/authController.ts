import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  res.send("register user");
};

export const login = async (req: Request, res: Response) => {
  res.send("login user");
};

export const updateUser = async (req: Request, res: Response) => {
  res.send("update user");
};
