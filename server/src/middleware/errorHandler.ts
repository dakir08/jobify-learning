import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export const errorHandlerMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  console.log("err", err);

  const defaultError = {
    statusCode: err.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message ?? "Something went wrong, try again later",
  };

  // auth controller might override the validation error
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = err.message;
    defaultError.msg = Object.values(err.errors)
      .map((error: any) => error.message)
      .join(", ");
  }

  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }

  res
    .status(defaultError.statusCode)
    .json({ msg: defaultError.msg, __debug: err });
};
