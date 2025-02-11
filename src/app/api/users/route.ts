
import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";


// const users = [
//     { id: 1, name: "Sulik", role: "admin", login: "Sulik", password: "admin1" },
//     { id: 2, name: "Vic", role: "user", login: "Vic", password: "admin2" },
//     { id: 3, name: "Marcus", role: "user", login: "Marcus", password: "admin3" },
//     { id: 4, name: "Lenny", role: "user", login: "Lenny", password: "admin4" },
// ]


// Тип для пользователя
type User = {
  id: number;
  name: string;
  role: "admin" | "user";
  login: string;
  password: string;
};

// Получение всех пользователей
export async function GET() {
  try {
    const users: User[] = (await sql`SELECT * FROM users`) as User[];
    return NextResponse.json(users);
  } catch (error) {
    console.error("Ошибка получения пользователей:", error);
    return NextResponse.json({ error: "Ошибка запроса" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, role, login, password } = await req.json();

    // Проверяем данные
    if (!name || !role || !login || !password) {
      return NextResponse.json({ error: "Все поля обязательны" }, { status: 400 });
    }

    const newUser = (await sql`
      INSERT INTO users (name, role, login, password)
      VALUES (${name}, ${role}, ${login}, ${password})
      RETURNING *;
    `) as User[];

    return NextResponse.json(newUser[0]);
  } catch (error) {
    console.error("Ошибка добавления пользователя:", error);
    return NextResponse.json({ error: "Ошибка добавления" }, { status: 500 });
  }
}