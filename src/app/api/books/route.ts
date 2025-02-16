// import Book from "@models/Book";
// import { Op } from "sequelize";
// import { connectDB } from "@utils/connectToDb";
// import { NextRequest, NextResponse } from "next/server";
import Book from "@models/Book";
import { connectDB } from "@utils/connectToDb";
import { NextResponse } from "next/server";

//TEST 1 WORK
// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({
//     books: [
//       {
//         id: 1,
//         title:
//           "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life ",
//         author: "Roger Wayne",
//         price: 16,
//         category: "motivation",
//         inStock: 66,
//         imageUrl: "https://m.media-amazon.com/images/I/81A5jQHA+lL._SX342_.jpg",
//         description:
//           "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better, happier people.",
//         createdAt: "2025-02-15T20:17:48.000Z",
//         updatedAt: "2025-02-15T20:17:48.000Z",
//       },
//     ],
//   });
// }

//TEST 2

export async function GET() {
  try {
    await connectDB();

    const books = await Book.findAll();

    return NextResponse.json({ books }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: `Failed to fetch books! Error: ${error}`,
      },
      { status: 500 }
    );
  }
}

// export async function GET(req: NextRequest) {
//   try {
//     const search = req.nextUrl.searchParams.get("search");

//     await connectDB();

//     let books;

//     if (!search) {
//       books = await Book.findAll();

//       if (!books || books.length === 0) {
//         return NextResponse.json(
//           { message: "Books not found!" },
//           { status: 404 }
//         );
//       }
//     } else {
//       books = await Book.findAll({
//         where: {
//           [Op.or]: [
//             { author: { [Op.like]: `%${search}%` } },
//             { title: { [Op.like]: `%${search}%` } },
//           ],
//         },
//       });

//       if (!books || books.length === 0) {
//         return NextResponse.json(
//           { books: [], message: "Books not found!" },
//           {
//             status: 404,
//           }
//         );
//       }
//     }

//     return NextResponse.json(
//       { books },
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       {
//         message: `Failed to fetch books! Error: ${error}`,
//       },
//       { status: 500 }
//     );
//   }
// }

// export const POST = async (req: NextRequest) => {
//   try {
//     await connectDB();
//     const bookData = await req.json();

//     console.log(bookData);

//     const newBook = await Book.create(bookData);

//     return new NextResponse(
//       JSON.stringify({ message: "Book created successfully", book: newBook }),
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error creating book:", error);
//     return new NextResponse(
//       JSON.stringify({
//         message: `Failed to fetch books! Error: ${error}`,
//       }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// };
