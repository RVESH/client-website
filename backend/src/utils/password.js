const PASSWORD_ITERATIONS = 100000;
const PASSWORD_HASH = "SHA-256";

const encoder = new TextEncoder();

function bytesToHex(bytes) {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBytes(hex) {
  return new Uint8Array(
    hex.match(/.{1,2}/g).map((b) => parseInt(b, 16))
  );
}

export async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: PASSWORD_ITERATIONS,
      hash: PASSWORD_HASH,
    },
    key,
    256
  );

  return {
    hash: bytesToHex(new Uint8Array(derivedBits)),
    salt: bytesToHex(salt),
  };
}

export async function verifyPassword(
  password,
  storedHash,
  storedSalt
) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: hexToBytes(storedSalt),
      iterations: PASSWORD_ITERATIONS,
      hash: PASSWORD_HASH,
    },
    key,
    256
  );

  const hash = bytesToHex(new Uint8Array(derivedBits));

  return hash === storedHash;
}