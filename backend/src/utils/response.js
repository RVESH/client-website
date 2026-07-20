
export function success(c, message = "Success", data = null, status = 200) {
  return c.json(
    {
      success: true,
      message,
      data,
    },
    status
  );
}

export function error(c, message = "Something went wrong", status = 500, details = null) {
  return c.json(
    {
      success: false,
      message,
      error: details,
    },
    status
  );
}