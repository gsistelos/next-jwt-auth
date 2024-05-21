import { prisma } from "@/db";

export async function createUser(formData: FormData) {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

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
