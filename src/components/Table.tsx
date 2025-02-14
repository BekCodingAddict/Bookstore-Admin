"use client";
import { IconDots } from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import OptionsModal from "./OptionsModal";
import EditBookModal from "./EditBookModal";
import { Book } from "@src/types/book";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useRouter } from "@node_modules/next/navigation";

const Table = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editMidalOpen, setEditModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0 });
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedBook, setSeletcedBook] = useState<number>(0);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  const router = useRouter();
  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setModalPosition({
      top: event.clientY,
    });
    setModalOpen(true);
  };

  const handleDelete = () => {
    setModalOpen(false);
    setDeleteModalOpen(true);
    router.push(`/books?delete=${selectedBook}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch("/api/books");
        const books = await response.json();

        if (!response.ok) {
          console.log("Books not found");
          return [];
        }
        setBooks(books);
      } catch (error) {
        console.log("Failed to fetch books! Error:" + error);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Cover</th>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Author</th>
            <th className="py-3 px-6 text-center">Category</th>
            <th className="py-3 px-6 text-center">Price</th>
            <th className="py-3 px-6 text-center">Stock</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>

        <tbody className="text-gray-700 text-sm ">
          {books.map((book) => (
            <tr
              key={book.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">
                <Image
                  src={book.imageUrl}
                  alt="Book image"
                  className="w-14 h-20 rounded-md object-cover"
                  width={40}
                  height={40}
                />
              </td>
              <td className="py-3 px-6 truncate max-w-60">{book.title}</td>
              <td className="py-3 px-6">{book.author}</td>
              <td className="py-3 px-6 text-center">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                  {book.category}
                </span>
              </td>
              <td className="py-3 px-6 text-center">${book.price}</td>
              <td className="py-3 px-6 text-center">{book.inStock}</td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={(e) => {
                    openModal(e);
                    setSeletcedBook(book.id);
                  }}
                  type="button"
                  className=" hover:underline mr-2"
                >
                  <IconDots />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <OptionsModal
          modalRef={modalRef}
          modalPosition={modalPosition}
          setModalOpen={setModalOpen}
          selectedBook={selectedBook}
          setEditModalOpen={setEditModalOpen}
          handleDelete={handleDelete}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          selectedBook={selectedBook}
          setDeleteModalOpen={setDeleteModalOpen}
        />
      )}

      {editMidalOpen && <EditBookModal onClose={setEditModalOpen} />}
    </>
  );
};

export default Table;
