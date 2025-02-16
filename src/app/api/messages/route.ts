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
    response.headers.set("Access-Control-Allow-Origin", `${process.env.NEXT_PUBLIC_URL}`);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;

  } catch (error) {
    console.error("Ошибка получения сообщений:", error);
    return NextResponse.json({ error: "Ошибка запроса" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { author, message } = await request.json();
    const [newMessage] = await sql`INSERT INTO messages (author, message) VALUES (${author}, ${message}) RETURNING id, author, message`;
    return NextResponse.json(newMessage);
  } catch (error) {
    console.error("Ошибка отправки сообщений:", error);
    return NextResponse.json({ error: "Ошибка запроса" }, { status: 500 });
  }
}