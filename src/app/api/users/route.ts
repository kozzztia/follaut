import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db"; // Убедись, что путь правильный!

type User = {
    id: number;
    name: string;
    login: string;
};
type FullUser = User & {
    password: string;
    role: string;
};

// Функция для добавления CORS-заголовков
const addCORS = (response: NextResponse) => {
    response.headers.set("Access-Control-Allow-Origin", `${process.env.NEXT_PUBLIC_URL}`);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
};

export async function GET(request: NextRequest) {
    try {
        const login = request.nextUrl.searchParams.get("login");

        let response;
        if (login) {
            const user: FullUser[] = (await sql`SELECT * FROM users WHERE login = ${login}`) as FullUser[];
            response = user.length > 0
                ? NextResponse.json(user[0])
                : NextResponse.json({ error: "Пользователь не найден" }, { status: 404 });
        } else {
            const users: User[] = (await sql`SELECT id, name, login FROM users`) as User[];
            response = NextResponse.json(users);
        }

        // Добавляем CORS и возвращаем результат
        return addCORS(response);

    } catch (error) {
        console.error("Ошибка базы данных:", error);
        const errorResponse = NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
        return addCORS(errorResponse);
    }
}
