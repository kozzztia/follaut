import { NextResponse } from "next/server";
import sql from "@/lib/db";

type Message = {
  id: number;
  author: string;
  message: string;
};

export async function GET() {
  try {
    const messages: Message[] = (await sql`SELECT * FROM messages`) as Message[];

    const response = NextResponse.json(messages);
    // response.headers.set("Access-Control-Allow-Origin", "https://follaut.vercel.app");
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;

  } catch (error) {
    console.error("Ошибка получения сообщений:", error);
    return NextResponse.json({ error: "Ошибка запроса" }, { status: 500 });
  }
}