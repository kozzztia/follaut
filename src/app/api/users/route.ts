import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";

// Функция для добавления CORS-заголовков
const addCORS = (response: NextResponse) => {
    response.headers.set("Access-Control-Allow-Origin", `${process.env.NEXT_PUBLIC_URL}`);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
};

// Получение пользователей или конкретного пользователя
export async function GET(request: NextRequest) {
    try {
        const login = request.nextUrl.searchParams.get("login");
        const password = request.nextUrl.searchParams.get("password");

        let response;
        if (login && password) {
            const user = await sql`SELECT * FROM users WHERE login = ${login} AND password = ${password}`;
            if (user.length > 0) {
                response = NextResponse.json(user[0]);
            } else {
                response = NextResponse.json({ error: "Неверный логин или пароль" }, { status: 401 });
            }
        } else {
            const users = await sql`SELECT id, name, login FROM users`;
            response = NextResponse.json(users);
        }

        return addCORS(response);

    } catch (error) {
        console.error("Ошибка базы данных:", error);
        const errorResponse = NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
        return addCORS(errorResponse);
    }
}
