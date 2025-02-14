"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditBookModal({
  book,
  onClose,
}: {
  book: any;
  onClose: (state: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    price: book.price,
    category: book.category.join(", "), // Convert array to string
    inStock: book.inStock,
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">✏️ Edit Book</h2>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div className="flex gap-2 flex-col">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-2 py-2 border rounded"
              placeholder="Book Title"
            />
          </div>

          <div className="flex gap-2 flex-col">
            {" "}
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Author"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Price"
            />
          </div>
          <div className="flex gap-2 flex-col">
            {" "}
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Categories (comma separated)"
            />
          </div>
          <div className="flex gap-2 flex-col">
            {" "}
            <label htmlFor="inStock">Quantity</label>
            <input
              type="number"
              name="inStock"
              id="inStock"
              value={formData.inStock}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Stock Quantity"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => {
              onClose(false);
              router.back();
            }}
          >
            ❌ Cancel
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
