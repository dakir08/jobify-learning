import { StatusCodes } from "http-status-codes";

export class CustomApiError extends Error {
  public statusCode: StatusCodes;

  /**
   * Custom API Error with default status code = BAD_REQUEST
   * @param message
   * @param statusCode
   */
  constructor(
    message: string,
    statusCode: StatusCodes = StatusCodes.BAD_REQUEST
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}
