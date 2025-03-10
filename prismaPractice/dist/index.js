"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstname, lastname, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                username,
                password,
                firstname,
                lastname,
                email
            }
        });
        console.log(response);
    });
}
// insertUser("c", "c", "c", "c", "c",);
function getUsers(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.findMany({
            where: {
                id: userid
            }
        });
        console.log(response);
    });
}
// getUsers(3)
function insertTodo(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.create({
            data: {
                title: "learning prisma",
                description: "trying to complete it today",
                userId: userId
            }
        });
        console.log(response);
    });
}
// insertTodo(3);
function getTodosandUsers(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                userId: userid
            },
            select: {
                title: true,
                description: true,
                done: true,
                user: true
            }
        });
        console.log(response);
    });
}
getTodosandUsers(3);
