// Ye register ke liye nahi hai.
// Ye reusable hai.

import ValidationError from "../errors/ValidationError.js";

export function validate(validator) {
  return async (c, next) => {
    let body = {};

    try {
      body = await c.req.json();
    } catch {
      body = {};
    }

    try {
      c.set("body", validator(body));
      await next();
    } catch (err) {
      if (err instanceof ValidationError) {
        throw err;
      }

      throw new ValidationError(err.message);
    }
  };
}