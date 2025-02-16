import Book from "@models/Book";
import { Op } from "sequelize";
import { connectDB } from "@utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const search = req.nextUrl.searchParams.get("search");

    await connectDB();

    let books;

    if (!search) {
      books = await Book.findAll();

      if (!books || books.length === 0) {
        return new NextResponse(
          JSON.stringify({ message: "Books not found!" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
    } else {
      books = await Book.findAll({
        where: {
          [Op.or]: [
            { author: { [Op.like]: `%${search}%` } },
            { title: { [Op.like]: `%${search}%` } },
          ],
        },
      });

      if (!books || books.length === 0) {
        return new NextResponse(
          JSON.stringify({ books: [], message: "Books not found!" }),
          {
            status: 404,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    return new NextResponse(JSON.stringify(books), { status: 200 });
  } catch (error) {
    console.error(error);
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

    return new NextResponse(
      JSON.stringify({ message: "Book created successfully", book: newBook }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating book:", error);
    return new NextResponse(
      JSON.stringify({
        message: `Failed to fetch books! Error: ${error}`,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
