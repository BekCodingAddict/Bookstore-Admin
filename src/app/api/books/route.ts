import sequelize from "@config/mySQL";
import Book from "@models/Book";
import { NextRequest, NextResponse } from "@node_modules/next/server";
import { connectDB } from "@utils/connectToDb";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const books = await Book.findAll();
    return NextResponse.json({ success: true, data: books });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
