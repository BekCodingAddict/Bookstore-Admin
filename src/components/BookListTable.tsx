"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Table from "./Table";
import EditBookModal from "./EditBookModal";
import { IconBooks, IconPlus } from "@tabler/icons-react";

const BookListTable = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAddingNewBook = searchParams.get("adding-new-book");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const debouncedSearch = async (term: string) => {
    const response = await fetch(`/api/books?search=${term}`);
    const data = await response.json();
    setBooks(data);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(
      async () => await debouncedSearch(value),
      500
    );
  };

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch("/api/books");

        if (!response.ok) {
          throw new Error(`Error fetching books: ${response.statusText}`);
        }

        const books = await response.json();

        setBooks(books.books);
      } catch (error) {
        console.log("Failed to fetch books! Error:", error);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-row justify-between border-b-2 p-2">
        <h1 className="font-bold text-2xl flex flex-row gap-2 text-stone-700">
          <IconBooks size={35} /> <span>Book List</span>
        </h1>
        <input
          className="mt-1 w-[60%] rounded-md border px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none"
          type="text"
          placeholder="Search book..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => {
            router.push("/books?adding-new-book=true");
          }}
          className="flex items-center font-semibold flex-row border-[1px] gap-2 p-2  bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 "
          aria-label="Add New Book"
        >
          <IconPlus />
          <span>Add New Book</span>
        </button>
      </div>

      <div className="container mx-auto relative">
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <Table books={books} />
        </div>
      </div>

      {isAddingNewBook && <EditBookModal />}
    </div>
  );
};

export default BookListTable;
