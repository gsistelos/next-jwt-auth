"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createUser, getUserByEmail } from "@/actions/user";
import { hashPassword, comparePasswords } from "@/lib/utils";
import { redirect } from "next/navigation";

const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);

const expirationTime = 24 * 60 * 60 * 1000; // 1 day

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 day from now")
    .sign(jwtSecret);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, jwtSecret, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function register(
  username: string,
  email: string,
  password: string,
) {
  if (await getUserByEmail(email)) {
    throw new Error("Email already in use");
  }

  const hashedPassword = hashPassword(password);

  await createUser(username, email, hashedPassword);

  redirect("/login");
}

export async function login(email: string, password: string) {
  const user = await getUserByEmail(email);

  if (!user || !comparePasswords(password, user.password)) {
    throw new Error("Invalid email or password");
  }

  const expires = new Date(Date.now() + expirationTime);
  const session = await encrypt({ user, expires });

  cookies().set("session", session, { expires, httpOnly: true });

  redirect("/");
}

export async function logout() {
  cookies().delete("session");

  redirect("/login");
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) {
    return null;
  }

  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) {
    return;
  }

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + expirationTime);

  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });

  return res;
}
