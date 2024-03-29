import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string, email: string) {
    const response = await prisma.user.create({
        data: {
            username,
            password,
            firstname,
            lastname,
            email
        }
    })
    console.log(response)
}

// insertUser("c", "c", "c", "c", "c",);

async function getUsers(userid: number) {
    const response = await prisma.user.findMany({
        where: {
            id : userid
        }
    })
    console.log(response)
}

// getUsers(3)