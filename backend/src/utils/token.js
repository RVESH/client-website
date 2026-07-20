// Hash refresh tokens before storing them in D1.

// We never store the raw refresh token in the database.
// Unlike passwords, refresh tokens are already cryptographically random,
//  so a plain SHA-256 hash (without salt) is appropriate and allows efficient
//  lookups.


const encoder = new TextEncoder();

function bytesToHex(bytes) {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function hashToken(token) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    encoder.encode(token)
  );

  return bytesToHex(new Uint8Array(digest));
}