import { Metadata } from "@node_modules/next";
import { redirect } from "@node_modules/next/navigation";
import BookDetails from "@src/components/BookDetails";
import { getBookById } from "@src/utils/services";

// Metadata
export const metadata: Metadata = {
  title: "Book Details",
  description: "Manage your bookstore easily",
};

const BookDetailsPage = async ({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) => {
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
      <BookDetails book={book} bookId={bookId} />
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
