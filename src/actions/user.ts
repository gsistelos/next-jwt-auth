import { prisma } from "@/db";

export async function getUsers() {
  return await prisma.user.findMany();
}
