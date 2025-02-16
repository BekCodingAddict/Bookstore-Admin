import Book from "@models/Book";
import { Op } from "sequelize";
import { connectDB } from "@utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json(
    {
      books: [
        {
          id: 1,
          title:
            "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life ",
          author: "Roger Wayne",
          price: 16,
          category: "motivation",
          inStock: 66,
          imageUrl:
            "https://m.media-amazon.com/images/I/81A5jQHA+lL._SX342_.jpg",
          description:
            "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better, happier people.",
          createdAt: "2025-02-15T20:17:48.000Z",
          updatedAt: "2025-02-15T20:17:48.000Z",
        },
        {
          id: 2,
          title:
            "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
          author: "Author, Narrator",
          price: 22,
          category: "Interactions",
          inStock: 102,
          imageUrl:
            "https://m.media-amazon.com/images/I/71F4+7rk2eL._SX342_.jpg",
          description:
            "No matter your goals, Atomic Habits offers a proven framework for improving - every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
          createdAt: "2025-02-15T20:20:30.000Z",
          updatedAt: "2025-02-15T20:20:30.000Z",
        },
        {
          id: 3,
          title:
            "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money - That the Poor and Middle Class Do Not!",
          author: "Robert T. Kiyosaki",
          price: 16,
          category: "Personal Finance",
          inStock: 112,
          imageUrl:
            "https://m.media-amazon.com/images/I/81nPwPrfwpL._SX342_.jpg",
          description:
            "ich Dad Poor Dad is the #1 personal finance book of all time. Listen today to set yourself up for a wealthy, happy future.\n\nRobert Kiyosaki’s easy tips and straight talk will…\n\nExplode the myth that you need to earn a high income to become rich\nChallenge the belief that your house is an asset\nDefine once and for all an asset and a liability\nShow parents why they can’t rely on the school system to educate kids about money\nClearly lay out what to teach kids about money for their future financial success",
          createdAt: "2025-02-15T20:21:42.000Z",
          updatedAt: "2025-02-15T20:21:42.000Z",
        },
        {
          id: 4,
          title:
            "The Success Paradox: How to Surrender & Win in Business and in Life",
          author: "Gary C. Cooper ",
          price: 15,
          category: "Business & Money",
          inStock: 56,
          imageUrl:
            "https://m.media-amazon.com/images/I/716qy2i33DL._SY342_.jpg",
          description:
            "The Success Paradox is the improbable story of a life and business transformed, told in a warmly authentic style that says: “I hit rock bottom, I surrendered, I began doing the opposite of what I’d been doing before, miracles happened, and here’s what you can learn from my journey.”",
          createdAt: "2025-02-15T22:13:17.000Z",
          updatedAt: "2025-02-15T22:13:17.000Z",
        },
        {
          id: 5,
          title:
            "Scale: Seven Proven Principles to Grow Your Business and Get Your Life Back",
          author: "David Finkel",
          price: 14,
          category: "Business & Money",
          inStock: 56,
          imageUrl:
            "https://m.media-amazon.com/images/I/71DWBp3OEcL._SY342_.jpg",
          description:
            "What if you could grow your business without the fear that it would take over your life?\nImagine you don’t have to choose between your personal life and the success of your business.\nWhat if the best way to scale your company is to reduce its reliance on you?",
          createdAt: "2025-02-15T22:14:04.000Z",
          updatedAt: "2025-02-15T22:14:04.000Z",
        },
        {
          id: 6,
          title:
            "How to Market a Book: Overperform in a Crowded Market (Reedsy Marketing Guides Book 1)",
          author: "Ricardo Fayet",
          price: 13,
          category: "Business & Money",
          inStock: 66,
          imageUrl:
            "https://m.media-amazon.com/images/I/81u7D0iNmlL._SY342_.jpg",
          description:
            "Marketing a book can seem like a full-time job, what with the crazy number of things authors seem to be expected to do: social media, blog tours, advertising, price promotions, mailing lists, giveaways, you name it.",
          createdAt: "2025-02-15T22:20:43.000Z",
          updatedAt: "2025-02-15T22:20:43.000Z",
        },
        {
          id: 7,
          title:
            "Clean Code: A Handbook of Agile Software Craftsmanship (Robert C. Martin Series)",
          author: "Martin Robert C. ",
          price: 37,
          category: "coding",
          inStock: 98,
          imageUrl:
            "https://m.media-amazon.com/images/I/71T7aD3EOTL._SY342_.jpg",
          description:
            "Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.\n",
          createdAt: "2025-02-15T22:26:27.000Z",
          updatedAt: "2025-02-15T22:26:27.000Z",
        },
        {
          id: 9,
          title:
            "Design Patterns: Elements of Reusable Object-Oriented Software (Addison-Wesley Professional Computing Series)",
          author: "Gamma Erich",
          price: 46,
          category: "Computers & Technology",
          inStock: 266,
          imageUrl:
            "https://m.media-amazon.com/images/I/51nL96Abi1L._SY342_.jpg",
          description:
            "Patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves. Highly influential, Design Patterns is a modern classic that introduces what patterns are and how they can help you design object-oriented software and provides a catalog of simple solutions for those already programming in at last one object-oriented programming language.",
          createdAt: "2025-02-15T22:32:59.000Z",
          updatedAt: "2025-02-15T22:32:59.000Z",
        },
        {
          id: 10,
          title: "System Design Interview – An insider's guide",
          author: "Alex Xu ",
          price: 63,
          category: "Computers & Technology",
          inStock: 37,
          imageUrl:
            "https://m.media-amazon.com/images/I/615KGTRs1OL._SY342_.jpg",
          description:
            "System design questions are often the most difficult of all technical interview questions. This book makes them easier to tackle. It is Volume 1 of the ‘System Design Interview - An Insider’s Guide’ series. This volume provides a reliable strategy and knowledge base for approaching a broad range of system design questions that you may encounter. It will help you feel confident during this important interview. This book provides a step-by-step framework for how to tackle a system design question. It also includes many real-world examples to illustrate a systematic approach, with detailed and well-explained steps you can follow.",
          createdAt: "2025-02-15T22:34:23.000Z",
          updatedAt: "2025-02-15T22:34:23.000Z",
        },
        {
          id: 11,
          title: "Hook Point: How to Stand Out in a 3-Second World",
          author: "Brendan Kane (Author)",
          price: 61,
          category: "Business & Money",
          inStock: 69,
          imageUrl:
            "https://m.media-amazon.com/images/I/81NNSrEkyZL._SY342_.jpg",
          description:
            "Hook Point: How to Stand Out in a 3-Second World, by out of the box thinker Brendan Kane, breaks down the most effective strategies to generate new opportunities, innovate and scale your business, and create a compelling brand—both online and off—so you can thrive in the new micro-attention world in which we live.",
          createdAt: "2025-02-15T22:50:08.000Z",
          updatedAt: "2025-02-15T22:50:08.000Z",
        },
        {
          id: 12,
          title:
            "Exit Rich: The 6 P Method to Sell Your Business for Huge Profit",
          author: "Michelle Seiler Tucker",
          price: 63,
          category: "Business & Money",
          inStock: 37,
          imageUrl:
            "https://m.media-amazon.com/images/I/41ed6IZVZQL._SY445_SX342_.jpg",
          description:
            "Too many entrepreneurs push off planning for the sale of their business until the last moment. But for a business to sell for what it’s really worth—or even more—owners need to prepare for the sale from the very start.",
          createdAt: "2025-02-15T22:51:00.000Z",
          updatedAt: "2025-02-15T22:51:00.000Z",
        },
        {
          id: 13,
          title: "Silent Success: Keep your goals and dreams to yourself ",
          author: "Silas Alex Mehrabian",
          price: 32,
          category: "Teen & Young Adult",
          inStock: 78,
          imageUrl:
            "https://m.media-amazon.com/images/I/51NNDQ92L0S._SY342_.jpg",
          description:
            "When reflecting on my childhood, I experience nostalgia and a variety of emotions, and I ponder my many memories; but the negative moments when I was made to feel like a failure stand out the most. Every bit of destructive criticism I got while I was trying to become the best version of myself is etched in my memory forever.",
          createdAt: "2025-02-15T22:52:31.000Z",
          updatedAt: "2025-02-15T22:52:31.000Z",
        },
        {
          id: 14,
          title:
            "WHAT DOES SUCCESS LOOK LIKE?: Turning Your Goals And Dreams Into Action Plans That Work",
          author: "VANCE WITHERS",
          price: 40,
          category: "Business & Money",
          inStock: 74,
          imageUrl:
            "https://m.media-amazon.com/images/I/41eMCrwb9GS._SY445_SX342_.jpg",
          description:
            "Too many people get put off from making the changes that are needed if they are to follow their dreams and aspirations. Whether at company or individual level, there is a tendency to ‘dream vaguely and dread precisely’ – in other words, the reasons for not doing something or the dangers in trying new things are often easier to identify and more tangible than the satisfaction that you would get by achieving your key goals.",
          createdAt: "2025-02-15T22:59:34.000Z",
          updatedAt: "2025-02-16T02:23:10.000Z",
        },
      ],
    },
    { status: 200 }
  );
};
// export const GET = async (req: NextRequest) => {
//   try {
//     const search = req.nextUrl.searchParams.get("search");

//     await connectDB();

//     let books;

//     if (!search) {
//       books = await Book.findAll();

//       if (!books || books.length === 0) {
//         return new NextResponse(
//           JSON.stringify({ message: "Books not found!" }),
//           { status: 404, headers: { "Content-Type": "application/json" } }
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
//         return new NextResponse(
//           JSON.stringify({ books: [], message: "Books not found!" }),
//           {
//             status: 404,
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//       }
//     }

//     return new NextResponse(JSON.stringify(books), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error(error);
//     return new NextResponse(
//       JSON.stringify({
//         message: `Failed to fetch books! Error: ${error}`,
//       }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// };

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
