import { prisma } from "@/db";

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
