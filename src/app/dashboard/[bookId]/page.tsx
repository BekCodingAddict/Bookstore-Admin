import Image from "next/image";

export const Books = [
  {
    id: 1,
    title: "Atomic Habits",
    image:
      "https://images-us.bookshop.org/ingram/9780735211292.jpg?width=384&v=v2",
    author: "James Clear",
    price: 22,
    category: ["habits", "motivation", "self-improve"],
    inStock: 12,
    description:
      "Thoughtful and easy to understand, James Clear’s Atomic Habits is a must for anyone trying to change their productivity. This simple guide will help create a strong foundation for building good habits and make it easy to say goodbye to bad habits for good.",
  },
  {
    id: 2,
    title: "Atomic Habits",
    image:
      "https://images-us.bookshop.org/ingram/9780735211292.jpg?width=384&v=v2",
    author: "James Clear",
    price: 22,
    category: ["habits", "motivation", "self-improve"],
    inStock: 12,
    description:
      "Thoughtful and easy to understand, James Clear’s Atomic Habits is a must for anyone trying to change their productivity. This simple guide will help create a strong foundation for building good habits and make it easy to say goodbye to bad habits for good.",
  },
];

const BookDetailsPage = async ({ params }: { params: { bookId: string } }) => {
  const bookId = await Number(params.bookId); // Ensures a valid number
  const book = Books?.find((book) => book.id === bookId);
  // if (!book) return redirect("/dashboard");
  // max-w-4xl mx-auto px-4 py-8

  return (
    <div className=" w-full border-collapse bg-white shadow-lg h-full rounded-md">
      <div className="max-w-6xl mx-auto px-4 py-8  rounded-lg p-6 md:flex">
        <div className="md:w-1/3">
          {book && (
            <Image
              src={book.image}
              alt={book.title}
              width={250}
              height={350}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Book Info */}
        <div className="md:w-2/3 md:ml-6 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-gray-600 mt-1">
            by <span className="font-semibold">{book.author}</span>
          </p>

          {/* Categories */}
          <div className="mt-3 flex flex-wrap gap-2">
            {book.category.map((cat) => (
              <span
                key={cat}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4">{book.description}</p>

          {/* Price & Stock */}
          <div className="mt-4">
            <p className="text-xl font-semibold text-gray-900">${book.price}</p>
            <p
              className={`text-sm ${
                book.inStock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {book.inStock > 0
                ? `In Stock (${book.inStock} available)`
                : "Out of Stock"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              ✏️ Edit
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
      <div className="m-8 max-w-6xl mx-auto">
        <h1 className="text-2xl italic font-semibold">Overview</h1>
        <div className="border-stone-500 border-2 m-8  mx-auto px-4 py-8  rounded-lg p-6 md:flex">
          <p className=" columns-2 column-gap-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            delectus repellendus nulla qui fuga possimus dicta rem dolores
            quasi. Autem eligendi dolore consectetur necessitatibus nihil
            facilis beatae veniam deserunt sequi odit tenetur possimus deleniti
            obcaecati quidem earum nesciunt nam repellat, totam adipisci
            voluptatum quaerat. Nihil aliquid expedita praesentium molestias
            exercitationem a natus sunt vero. Assumenda illum temporibus omnis
            voluptate tenetur iste odio. Sunt itaque, earum maiores rerum iusto
            corporis atque illo culpa nobis, praesentium in unde dolorem
            reiciendis! Adipisci, consequuntur exercitationem. Nesciunt
            doloribus veniam laudantium quaerat iusto iure error autem
            reprehenderit? Illum consequuntur amet sint iste nobis. Quos
            obcaecati dolorem officia possimus odit? Accusamus rerum, numquam
            nihil dolores architecto qui deleniti quasi amet ducimus velit illo
            repellat doloribus magni! A expedita architecto vitae aut.
            Cupiditate numquam, vel obcaecati ad enim eveniet magnam incidunt
            optio, accusantium eaque inventore doloribus accusamus ut!
            Repellendus fugiat eaque excepturi totam suscipit adipisci eveniet
            cumque, quas doloribus aliquam quos sit voluptatem iure aperiam,
            voluptatum eius sequi laboriosam obcaecati voluptas. Nulla ducimus,
            illo, quibusdam harum doloremque blanditiis culpa expedita eligendi
            unde aperiam veniam quia distinctio voluptates! Dolorum consequuntur
            molestiae nobis magni. Doloremque quo amet maxime alias iste
            tempora, recusandae eaque saepe aperiam cumque est architecto. Odio,
            quisquam quibusdam et, error vel nemo commodi saepe quae ducimus
            totam rem esse quidem nesciunt atque similique est voluptas quaerat
            non sapiente nulla molestias distinctio ratione soluta eius! Ullam
            quaerat, magnam qui impedit nostrum, quia temporibus dolorem quam
            saepe natus enim? Nemo voluptatem illum assumenda consequuntur?
            Recusandae in explicabo eos labore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;

const EditModal = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Book Image */}
        <div className="w-full md:w-1/3">
          <Image
            src={book.image}
            alt={book.title}
            width={200}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Book Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-gray-600 text-sm">by {book.author}</p>

          {/* Price */}
          <p className="mt-4 text-xl font-semibold text-blue-600">
            ${book.price}
          </p>

          {/* Categories */}
          <div className="mt-2 flex gap-2">
            {book.category.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center gap-4">
            <button className="px-3 py-1 text-lg bg-gray-200 rounded hover:bg-gray-300">
              ➖
            </button>
            <span className="text-lg font-semibold">{1}</span>
            <button className="px-3 py-1 text-lg bg-gray-200 rounded hover:bg-gray-300">
              ➕
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              🛒 Add to Cart
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              ❌ Remove Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
