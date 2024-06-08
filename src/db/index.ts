import { PrismaClient, Prisma } from "@prisma/client";
export * from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
