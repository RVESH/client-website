import { verifyAccessToken } from "../utils/jwt";
import UnauthorizedError from "../errors/UnauthorizedError";

export async function authMiddleware(c, next) {
  const authorization = c.req.header("Authorization");

  if (!authorization?.startsWith("Bearer ")) {
    throw new UnauthorizedError("Authentication required.");
  }

  const token = authorization.slice(7).trim();

  if (!token) {
    throw new UnauthorizedError("Authentication required.");
  }

  try {
    const payload = await verifyAccessToken(c.env, token);

    c.set("user", {
      id: payload.sub,
      email: payload.email,
    });

    await next();
  } catch {
    throw new UnauthorizedError("Invalid or expired access token.");
  }
}