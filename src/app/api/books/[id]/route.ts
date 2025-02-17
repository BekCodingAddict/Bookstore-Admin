import Book from "@models/Book";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@utils/connectToDb";

//GET

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const book = await Book.findByPk(String(id));
    if (!book) return new NextResponse("Book not found!", { status: 404 });

    return new NextResponse(JSON.stringify(book), { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to fetch book! Error:${error}`, {
      status: 500,
    });
  }
}

//PUT
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();

    const book = await Book.findOne({ where: { id: id } });

    if (!book) {
      return new NextResponse("Book not found!", { status: 404 });
    }

    const updatedData = await req.json();

    await book.update(updatedData);

    return new NextResponse(
      JSON.stringify({ message: "Book updated successfully!", book }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(`Failed to update book! Error: ${error}`, {
      status: 500,
    });
  }
}

// DELETE
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();

    const book = await Book.findOne({ where: { id: id } });

    if (!book) {
      return new NextResponse("Book not found!", { status: 404 });
    }

    const deletedBook = await book.destroy();
    return new NextResponse(
      JSON.stringify({ message: "Book updated successfully!", deletedBook }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(`Failed to delete book! Error: ${error}`, {
      status: 500,
    });
  }
}
