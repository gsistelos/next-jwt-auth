import { PrismaClient } from "@prisma/client";

function createPrismaClient() {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }

  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  return global.prisma;
}

const prisma = createPrismaClient();

export { prisma };
