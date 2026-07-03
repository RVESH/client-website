import AppError from "../errors/AppError";
import { error } from "../utils/response";

export function handleError(c, err) {
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