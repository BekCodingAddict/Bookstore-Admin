import Book from "@models/Book";
import { Params } from "@node_modules/next/dist/server/request/params";
import { NextRequest, NextResponse } from "@node_modules/next/server";
import { connectDB } from "@utils/connectToDb";

//GET
export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  const { id } = await params;
  try {
    await connectDB();
    const book = await Book.findByPk(id);
    if (!book) return new NextResponse("Book not found!", { status: 404 });

    return new NextResponse(JSON.stringify(book), { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to fetch book! Error:${error}`, {
      status: 500,
    });
  }
};
