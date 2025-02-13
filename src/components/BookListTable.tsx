import { IconPlus } from "@tabler/icons-react";
import React from "react";
import Table from "./Table";

const BookListTable = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between border-b-2 p-2">
        <h1 className="font-bold text-2xl">📚 Book List</h1>
        <input
          className="w-[60%] rounded-md hover:outline-2 outline-[1px] outline-black hover:outline-black focus:outline-1 focus:outline-black py-2 px-4"
          type="text"
          placeholder="Search book..."
        />
        <button
          className="flex font-semibold flex-row border-[1px] gap-1 p-2 bg-black text-white rounded-md text-sm hover:bg-white hover:text-black hover:border-slate-950 hover:border-[1px]"
          aria-label="Add New Book"
        >
          <IconPlus />
          <span>Add New Book</span>
        </button>
      </div>
      {/* <div className="flex flex-row justify-end p-2"></div> */}

      <div className="container mx-auto">
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default BookListTable;
