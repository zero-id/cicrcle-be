import { PrismaClient, Prisma } from "@prisma/client";
import { error } from "console";
export * from "@prisma/client";

const prisma = new PrismaClient();

if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // error handling code
    console.log('kontol');
    
 }

export default prisma;
