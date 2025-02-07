import { NextResponse } from "next/server";

const users = [
    { id: 1, name: "Sulik" },
    { id: 2, name: "Vic" },
    { id: 3, name: "Marcus" },
    { id: 4, name: "Lenny" },
];

export async function GET() {
    return NextResponse.json(users);
}
