import { verifyAccessToken } from "../utils/jwt.js";
import { findUserById } from "../repositories/user.repository.js";
import UnauthorizedError from "../errors/UnauthorizedError.js";

export async function authMiddleware(c, next) {
  const authorization = c.req.header("Authorization");

  if (!authorization?.startsWith("Bearer ")) {
    throw new UnauthorizedError("Authentication required.");
  }

  const token = authorization.substring(7);

  let payload;

  try {
    payload = await verifyAccessToken(c.env, token);
  } catch {
    throw new UnauthorizedError("Invalid or expired access token.");
  }

  const user = await findUserById(c.env, payload.sub);

  if (!user) {
    throw new UnauthorizedError("User not found.");
  }

  if (!user.email_verified) {
    throw new UnauthorizedError("Email not verified.");
  }

  if (user.status !== "active") {
    throw new UnauthorizedError("Account is inactive.");
  }

  c.set("user", user);

  await next();
}