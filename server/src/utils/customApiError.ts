import { StatusCodes } from "http-status-codes";

export class CustomApiError extends Error {
  public statusCode: StatusCodes;

  constructor(
    message: string,
    statusCode: StatusCodes = StatusCodes.BAD_REQUEST
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}
