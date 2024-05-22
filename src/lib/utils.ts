import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createHash } from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hashPassword(password: string) {
  return createHash("sha256").update(password).digest("hex");
}

export function comparePasswords(input: string, hash: string) {
  return hashPassword(input) === hash;
}
