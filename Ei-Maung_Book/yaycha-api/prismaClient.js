import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma; // ✅ Use `export default` for ES modules
