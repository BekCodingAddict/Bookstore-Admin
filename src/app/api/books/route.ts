import Book from "@models/Book";
import { connectDB } from "@utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params; // No need to await params

  try {
    await connectDB();
    const book = await Book.findByPk(id);

    if (!book) {
      return new NextResponse("Book not found!", { status: 404 });
    }

    return NextResponse.json(book, { status: 200 }); // Preferred way for JSON responses
  } catch (error) {
    return new NextResponse(`Failed to fetch book! Error: ${error}`, {
      status: 500,
    });
  }
};
