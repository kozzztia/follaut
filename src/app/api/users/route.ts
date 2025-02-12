
import { NextResponse } from "next/server";
import sql from "@/lib/db";

type User = {
  id: number;
  name: string;
  role: "admin" | "user";
};


export async function GET() {
  try {
    const users: User[] = (await sql`SELECT id, name, role FROM users`) as User[];
    return NextResponse.json(users);
  } catch (error) {
    console.error("Ошибка получения пользователей:", error);
    return NextResponse.json({ error: "Ошибка запроса" }, { status: 500 });
  }
}
