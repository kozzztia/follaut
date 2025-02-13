// src/app/api/users/route.ts

import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db"; // Убедись, что путь корректный!

type User = {
    id: number;
    name: string;
    login: string;
};

export async function GET(request: NextRequest) {
    try {
        const login = request.nextUrl.searchParams.get("login");

        if (login) {
            const user: User[] = (await sql`SELECT id, name, login FROM users WHERE login = ${login}`) as User[];
            if (user.length === 0) {
                return NextResponse.json({ error: "Пользователь не найден" }, { status: 404 });
            }
            return NextResponse.json(user[0]);
        } else {
            const users: User[] = (await sql`SELECT id, name, login FROM users`) as User[];
            return NextResponse.json(users);
        }
    } catch (error) {
        console.error("Ошибка базы данных:", error);
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}
