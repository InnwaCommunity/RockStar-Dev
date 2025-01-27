import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function UserSeeder() {
    const password = await bcrypt.hash("password", 10);
    console.log("User seeding started...");
    for (let i = 0; i < 10; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const name = `${firstName} ${lastName}`;
        const username = `${firstName}${lastName[0]}`.toLowerCase();
        const bio = faker.person.bio();

        await prisma.user.upsert({
            where: { username },
            update: {},
            create: { name, username, bio, password },
        });
    }
    console.log("User seeding done.");
}
