"use client";
import { IconPlus } from "@tabler/icons-react";
import React from "react";
import Table from "./Table";
import { useRouter, useSearchParams } from "next/navigation";
import EditBookModal from "./EditBookModal";

const BookListTable = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAddingNewBook = searchParams.get("adding-new-book");

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-row justify-between border-b-2 p-2">
        <h1 className="font-bold text-2xl">📚 Book List</h1>
        <input
          className="w-[60%] rounded-md hover:outline-2 outline-[1px] outline-black hover:outline-black focus:outline-1 focus:outline-black py-2 px-4"
          type="text"
          placeholder="Search book..."
        />
        <button
          onClick={() => {
            router.push("/books?adding-new-book=true");
          }}
          className="flex items-center font-semibold flex-row border-[1px] gap-1 p-2 bg-black text-white rounded-md text-sm hover:bg-white hover:text-black hover:border-slate-950 hover:border-[1px]"
          aria-label="Add New Book"
        >
          <IconPlus />
          <span>Add New Book</span>
        </button>
      </div>
      {/* <div className="flex flex-row justify-end p-2"></div> */}

      <div className="container mx-auto relative">
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <Table />
        </div>
      </div>

      {isAddingNewBook && <EditBookModal />}
    </div>
  );
};

export default BookListTable;
