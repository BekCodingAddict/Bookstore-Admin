"use client";
import { IconDots } from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import OptionsModal from "./OptionsModal";
import EditBookModal from "./EditBookModal";
import { Book } from "@src/types/book";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useRouter } from "@node_modules/next/navigation";

const itemsPerPage = 10;

const Table = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editMidalOpen, setEditModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0 });
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedBook, setSeletcedBook] = useState<number>(0);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();
  //PAGINATION STATES
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(books.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-[12px]">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase leading-normal">
              <th className="py-2 px-4 text-left">Cover</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Author</th>
              <th className="py-2 px-4 text-center">Category</th>
              <th className="py-2 px-4 text-center">Price</th>
              <th className="py-2 px-4 text-center">Stock</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {currentBooks.map((book) => (
              <tr
                key={book.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4">
                  <Image
                    src={book.imageUrl}
                    alt="Book image"
                    className="w-10 h-14 rounded-md object-cover"
                    width={10}
                    height={14}
                  />
                </td>
                <td className="py-2 px-4 truncate max-w-40">{book.title}</td>
                <td className="py-2 px-4 whitespace-nowrap">{book.author}</td>
                <td className="py-2 px-4 text-center">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-[11px]">
                    {book.category}
                  </span>
                </td>
                <td className="py-2 px-4 text-center">${book.price}</td>
                <td className="py-2 px-4 text-center">{book.inStock}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={(e) => {
                      openModal(e);
                      setSeletcedBook(book.id);
                    }}
                    type="button"
                    className="hover:underline"
                  >
                    <IconDots />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 p-3 text-sm">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-1 border rounded ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-700 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-1 border rounded ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            Next
          </button>
        </div>
      </div>

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
