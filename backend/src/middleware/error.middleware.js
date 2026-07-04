import AppError from "../errors/AppError.js";
import { error } from "../utils/response.js";

export function handleError(err, c) {
  if (err instanceof AppError) {
    return error(
      c,
      err.message,
      err.statusCode,
      {
        code: err.code,
      }
    );
  }

  console.error(err);

  return error(
    c,
    "Internal Server Error",
    500,
    {
      code: "INTERNAL_SERVER_ERROR",
    }
  );
}