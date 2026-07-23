export function getRefreshTokenExpiry(env) {
  const value = env.REFRESH_TOKEN_EXPIRES_IN || "30d";

  const amount = Number.parseInt(value, 10);
  const unit = value.slice(-1);

  let milliseconds = 0;

  switch (unit) {
    case "m":
      milliseconds = amount * 60 * 1000;
      break;

    case "h":
      milliseconds = amount * 60 * 60 * 1000;
      break;

    case "d":
      milliseconds = amount * 24 * 60 * 60 * 1000;
      break;

    default:
      throw new Error("Invalid REFRESH_TOKEN_EXPIRES_IN");
  }

  return new Date(Date.now() + milliseconds).toISOString();
}