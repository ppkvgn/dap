import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const passwordHash = await bcrypt.hash('123456', 10);

    await prisma.user.upsert({
        where: { email: 'lawyer@example.com' },
        update: {},
        create: {
            email: 'lawyer@example.com',
            password: passwordHash,
            role: 'LAWYER',
        },
    });

    console.log('✅ User seeded successfully');
}

main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        console.error(e);
        prisma.$disconnect();
        process.exit(1);
    });
