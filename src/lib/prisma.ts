import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'], // prisma faz log para todas querys executada para bd
})
