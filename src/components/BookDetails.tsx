"use client";

import { IconEdit, IconTrashX } from "@tabler/icons-react";
import { Book } from "@src/types/book";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditBookModal from "./EditBookModal";

const BookDetails = ({ book, bookId }: { book: Book; bookId: string }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8  rounded-lg p-6 md:flex">
      <div className="md:w-1/3">
        {book && (
          <img
            src={book.imageUrl}
            alt={book.title}
            width={250}
            height={350}
            className="rounded-lg shadow-md"
            loading="lazy"
          />
          //   <Image
          //     src={book.imageUrl}
          //     alt={book.title}
          //     width={250}
          //     height={350}
          //     className="rounded-lg shadow-md"
          //   />
        )}
      </div>

      <div className="md:w-2/3 md:ml-6 mt-6 md:mt-0">
        <h1 className="text-2xl font-bold text-stone-700">{book.title}</h1>
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
          <p className="text-xl font-semibold text-stone-700">${book.price}</p>
          <p
            className={`text-sm font-semibold ${
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
            className="flex flex-row gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <IconEdit />
            <span> Edit</span>
          </button>
          <button
            onClick={() => setDeleteModalOpen(true)}
            className=" flex flex-row gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-red-600 hover:to-red-700 focus:outline-none transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <IconTrashX /> <span>Delete</span>
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
