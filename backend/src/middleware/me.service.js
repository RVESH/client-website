import { findUserById } from "../../repositories/user.repository";
import NotFoundError from "../../errors/NotFoundError";

export async function me(env, userId) {
  const user = await findUserById(env, userId);

  if (!user) {
    throw new NotFoundError("User not found.");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    emailVerified: Boolean(user.email_verified),
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };
}