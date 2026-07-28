// const BASE_URL =
//   process.env.REACT_APP_API_URL ||
// "http://192.168.31.77:4000/auth";
const BASE_URL =
  process.env.REACT_APP_API_URL ||
  "http://127.0.0.1:8787/auth";
  
  async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    throw new Error("No refresh token.");
  }

  const response = await fetch(`${BASE_URL}/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  localStorage.setItem(
    "accessToken",
    result.data.accessToken
  );

  localStorage.setItem(
    "refreshToken",
    result.data.refreshToken
  );

  return result.data.accessToken;
}
export async function api(endpoint, options = {}) {
  let accessToken = localStorage.getItem("accessToken");

  const sendRequest = async (token) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {}),
        ...(options.headers || {}),
      },
    });

    const result = await response.json();

    return {
      response,
      result,
    };
  };

  let { response, result } = await sendRequest(accessToken);

  // Access token expired
  if (response.status === 401) {
    try {
      accessToken = await refreshAccessToken();

      ({ response, result } = await sendRequest(accessToken));
    } catch (error) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      window.location.href = "/creator/login";

      throw error;
    }
  }

  if (!response.ok) {
    throw new Error(result.message || "Request failed.");
  }

  return result;
}