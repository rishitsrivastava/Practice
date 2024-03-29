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

async function insertTodo(userId: number) {
    const response = await prisma.todo.create({
        data: {
            title: "learning prisma",
            description: "trying to complete it today",
            userId: userId
        }
    })
    console.log(response);
}

// insertTodo(3);


async function getTodosandUsers(userid: number) {
    const response = await prisma.todo.findMany({
        where: {
            userId: userid
        },
        select: {
            title: true,
            description: true,
            done: true,
            user: true
        }
    })
    console.log(response)
}

getTodosandUsers(3)