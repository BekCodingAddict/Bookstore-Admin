import Book from "@models/Book";
import { connectDB } from "@utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const books = await Book.findAll();

    if (!books) {
      return new NextResponse("Books not found!", { status: 404 });
    }

    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to fetch book! Error: ${error}`, {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const bookData = await req.json();

    console.log(bookData);

    const newBook = await Book.create(bookData);

    return NextResponse.json(
      { message: "Book created successfully", book: newBook },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating book:", error);
    return NextResponse.json(
      { message: "Failed to create book!", error: error },
      { status: 500 }
    );
  }
};
