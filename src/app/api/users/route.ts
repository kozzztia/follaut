import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";

// Добавляем CORS-заголовки
const addCORS = (response: NextResponse) => {
    response.headers.set("Access-Control-Allow-Origin", `${process.env.NEXT_PUBLIC_URL}`);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
};

// Основной обработчик запросов
export async function GET(request: NextRequest) {
    try {
        const login = request.nextUrl.searchParams.get("login");
        const password = request.nextUrl.searchParams.get("password");

        let response;

        if (login && password) {
            // Проверка логина и пароля
            const [user] = await sql`SELECT id, name, login, role FROM users WHERE login = ${login} AND password = ${password}`;
            response = user 
                ? NextResponse.json(user) 
                : NextResponse.json({ error: "Неверный логин или пароль" }, { status: 401 });
        } 
        else if (login) {
            // Поиск пользователя по логину
            const [user] = await sql`SELECT id, name, login, role FROM users WHERE login = ${login}`;
            response = user 
                ? NextResponse.json(user) 
                : NextResponse.json({ error: "Пользователь не найден" }, { status: 404 });
        } 
        else {
            // Получение всех пользователей
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

export async function POST(request: NextRequest) {
    try {
        const { name, login, password } = await request.json();
        const role = "user";
        const [user] = await sql`INSERT INTO users (name, login, password, role) VALUES (${name}, ${login}, ${password}, ${role}) RETURNING id, name, login, role`;
        return NextResponse.json(user);
    } catch (error) {
        console.error("Ошибка базы данных:", error);
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}