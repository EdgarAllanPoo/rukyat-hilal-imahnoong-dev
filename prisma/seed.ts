import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const user = await prisma.user.create({ 
        data: { 
            name: 'Rukyat User',
            email: 'rukyat.user@example.com',
            password: 'rukyatuser',
            year_of_birth: 1990,
            phone_number: '1234567890',
            agency_name: 'Example Agency',
            isAdmin: false,
        },
    });
    for (let i = 0; i < 10; i++) {
        const rukyat = {
            link_photo: 'https://cdn.wallpapersafari.com/4/17/x3oI6d.jpg',
            description: `Rukyat Result - ${i+1}`,
            taken_date: '2023-02-28',
            userId: user.id,
        }
        await prisma.rukyat.create({
            data: rukyat
        });
    }
}

main()
    .then(() => {
        console.log('Seed data succeed!');
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        prisma.$disconnect();
    });
