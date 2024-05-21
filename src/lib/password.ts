import { createHash } from "crypto";

export function hashPassword(password: string) {
  return createHash("sha256").update(password).digest("hex");
}

export function comparePasswords(input: string, hash: string) {
  return hashPassword(input) === hash;
}
