import Image from "next/image";
import React from "react";

const Table = () => {
  return (
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

      <tbody className="text-gray-700 text-sm">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">
            <Image
              src="https://images-us.bookshop.org/ingram/9780735211292.jpg?width=384&v=v2"
              alt="Atomic Habits"
              className="w-14 h-20 rounded-md object-cover"
              width={40} // Correct (number)
              height={40}
            />
          </td>
          <td className="py-3 px-6">Atomic Habits</td>
          <td className="py-3 px-6">James Clear</td>
          <td className="py-3 px-6 text-center">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
              Self-Improve
            </span>
          </td>
          <td className="py-3 px-6 text-center">$22</td>
          <td className="py-3 px-6 text-center">12</td>
          <td className="py-3 px-6 text-center">
            <button className="text-blue-500 hover:underline mr-2">
              ✏️ Edit
            </button>
            <button className="text-red-500 hover:underline">🗑️ Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
