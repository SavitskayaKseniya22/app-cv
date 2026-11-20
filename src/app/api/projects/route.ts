import { NextResponse } from "next/server";
import { projects } from "@/entities/project";

export async function GET() {
    return NextResponse.json(projects);
}
