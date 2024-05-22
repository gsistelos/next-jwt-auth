"use server";

import { prisma } from "@/db";

export async function createUser(
  username: string,
  email: string,
  password: string,
) {
  return await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
}

export async function getUsers() {
  return await prisma.user.findMany();
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
}
