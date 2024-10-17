import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const ingredientsList = await prisma.ingredient.findMany();
  return NextResponse.json(ingredientsList);
}
