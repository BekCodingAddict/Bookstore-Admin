"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Table from "./Table";
import EditBookModal from "./EditBookModal";

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
    debounceTimeout.current = setTimeout(() => debouncedSearch(value), 1000);
  };

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
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-row justify-between border-b-2 p-2">
        <h1 className="font-bold text-2xl">📚 Book List</h1>
        <input
          className="w-[60%] rounded-md hover:outline-2 outline-[1px] outline-black hover:outline-black focus:outline-1 focus:outline-black py-2 px-4"
          type="text"
          placeholder="Search book..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => {
            router.push("/books?adding-new-book=true");
          }}
          className="flex items-center font-semibold flex-row border-[1px] gap-1 p-2 bg-black text-white rounded-md text-sm hover:bg-white hover:text-black hover:border-slate-950 hover:border-[1px]"
          aria-label="Add New Book"
        >
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
