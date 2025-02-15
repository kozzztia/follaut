
import { NextResponse } from "next/server";
import sql from "@/lib/db";

type Message = {
  id: number;
  author: string;
  message: string;
};


export async function GET() {
  try {
    const users: Message[] = (await sql`SELECT * FROM messages`) as Message[];
    return NextResponse.json(users);
  } catch (error) {
    console.error("Ошибка получения сообщений:", error);
    return NextResponse.json({ error: "Ошибка запроса" }, { status: 500 });
  }
}
