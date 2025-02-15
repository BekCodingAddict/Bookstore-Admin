import Book from "@models/Book";
import { Op } from "sequelize";
import { connectDB } from "@utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const search = req.nextUrl.searchParams.get("search");

    if (!search) {
      await connectDB();
      const books = await Book.findAll();

      if (!books || books.length === 0) {
        return new NextResponse(
          JSON.stringify({ message: "Books not found!" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
      return NextResponse.json(books, { status: 200 });
    }

    await connectDB();
    const searchedBooks = await Book.findAll({
      where: {
        [Op.or]: [
          { author: { [Op.like]: `%${search}%` } },
          { title: { [Op.like]: `%${search}%` } },
        ],
      },
    });

    if (!searchedBooks || searchedBooks.length === 0) {
      return new NextResponse(
        JSON.stringify({ books: [], message: "Books not found!" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return NextResponse.json(searchedBooks, { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: `Failed to fetch books! Error: ${error}`,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
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
