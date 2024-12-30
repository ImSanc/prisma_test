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
function getTodos(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: { userId: userid }
        });
        console.log(response);
    });
}
function getUserAndTodosOfUser(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                userId: userid
            },
            select: {
                id: true,
                title: true,
                user: {
                    select: {
                        username: true,
                        firstName: true,
                        lastName: true
                    }
                }
            }
        });
        console.log(response);
    });
}
function insertuser(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                username: params.username,
                password: params.password,
                firstName: params.firstName,
                lastName: params.lastName,
            }
        });
        console.log(response);
    });
}
function insertTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.createMany({
            data: [
                {
                    title: "test",
                    userId: 1
                },
                {
                    title: "test2",
                    userId: 1
                }
            ]
        });
        console.log(response);
    });
}
// insertuser({ username: "test", password: "test", firstName: "test", lastName: "test" });
getTodos(1).then(() => { console.log("User and Todos of User"); });
getUserAndTodosOfUser(1);
//insertTodo();
