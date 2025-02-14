"use client";
import { IconDots } from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import OptionsModal from "./OptionsModal";
import EditBookModal from "./EditBookModal";
import { Book } from "@src/types/book";

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

const Table = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editMidalOpen, setEditModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0 });
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedBook, setSeletcedBook] = useState<number>(0);
  const [books, setBooks] = useState<Book[]>([]);

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setModalPosition({
      top: event.clientY,
    });
    setModalOpen(true);
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
        console.log(books);
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
                  src="https://images-us.bookshop.org/ingram/9780735211292.jpg?width=384&v=v2"
                  alt="Atomic Habits"
                  className="w-14 h-20 rounded-md object-cover"
                  width={40} // Correct (number)
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
              <td className="py-3 px-6 text-center">$22</td>
              <td className="py-3 px-6 text-center">12</td>
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
        />
      )}

      {editMidalOpen && <EditBookModal onClose={setEditModalOpen} />}
    </>
  );
};

export default Table;
