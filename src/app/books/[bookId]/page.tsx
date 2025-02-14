import { redirect } from "@node_modules/next/navigation";
import { getBookById } from "@src/utils/services";
import Image from "next/image";

const BookDetailsPage = async ({ params }: { params: { bookId: string } }) => {
  const { bookId } = await params;

  if (!bookId) {
    redirect("/books");
  }
  const book = await getBookById(bookId);

  if (!book) {
    redirect("/books");
  }

  return (
    <div className=" w-full border-collapse bg-white shadow-lg h-full rounded-md">
      <div className="max-w-6xl mx-auto px-4 py-8  rounded-lg p-6 md:flex">
        <div className="md:w-1/3">
          {book && (
            <Image
              src={book.imageUrl}
              alt={book.title}
              width={250}
              height={350}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        <div className="md:w-2/3 md:ml-6 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-gray-600 mt-1">
            by <span className="font-semibold">{book.author}</span>
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
              {book.category}
            </span>
          </div>

          <p className="text-gray-700 mt-4">{book.description}</p>

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
      {/* MOCKUP OVERVIEW TEXT */}
      <div className="m-8 max-w-6xl mx-auto ">
        <h1 className="text-2xl italic font-semibold">Overview</h1>
        <div className="border-stone-500 border-2 m-8  mx-auto px-4 py-8  rounded-lg p-6 md:flex ">
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
