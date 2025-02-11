import { NextResponse } from "next/server";

const person = [
    { id: 1, name: "Sulik" },
    { id: 2, name: "Vic" },
    { id: 3, name: "Marcus" },
    { id: 4, name: "Lenny" },
];

export async function GET() {
    return NextResponse.json(person);
}
