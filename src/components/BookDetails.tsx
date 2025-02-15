"use client";

import { useState } from "react";
import Image from "@node_modules/next/image";
import { Book } from "@src/types/book";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditBookModal from "./EditBookModal";
import { useRouter } from "next/navigation";

const BookDetails = ({ book, bookId }: { book: Book; bookId: string }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const router = useRouter();

  return (
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
          <button
            onClick={() => {
              setEditModalOpen(true);
              router.push(`/books/${bookId}?edit=${bookId}`);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            ✏️ Edit
          </button>
          <button
            onClick={() => setDeleteModalOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          selectedBook={parseInt(bookId)}
          setDeleteModalOpen={setDeleteModalOpen}
        />
      )}
      {editModalOpen && <EditBookModal onClose={setEditModalOpen} />}
    </div>
  );
};

export default BookDetails;
