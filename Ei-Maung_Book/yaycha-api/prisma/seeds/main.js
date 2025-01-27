import { PrismaClient } from "@prisma/client";
import { UserSeeder } from "./UserSeeder.js";
import { PostSeeder } from "./PostSeeder.js";
import { CommentSeeder } from "./CommentSeeder.js";
import process from "process"; // ✅ Explicitly import process

const prisma = new PrismaClient();

async function main() {
    try {
        await UserSeeder();
        await PostSeeder();
        await CommentSeeder();
    } catch (e) {
        console.error(e);
        process.exit(1); // ✅ Now `process` is properly imported
    } finally {
        await prisma.$disconnect();
    }
}

main();
