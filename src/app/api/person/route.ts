import { NextResponse } from "next/server";

const users = [
    { id: 1, name: "Sulik" },
    { id: 2, name: "Sulik1" },
    { id: 3, name: "Sulik2" },
];

export async function GET() {
    return NextResponse.json(users);
}
