"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { Books } from "./Table";

export default function EditBookModal({
  onClose,
}: {
  onClose?: (state: boolean) => void;
}) {
  const searchParams = useSearchParams();
  const bookId = searchParams.get("edit");

  const book = bookId ? Books.find((book) => book.id === Number(bookId)) : null;

  const [formData, setFormData] = useState({
    title: book ? book.title : "",
    author: book ? book.author : "",
    price: book ? book.price : "",
    category: book ? book.category.join(", ") : "",
    inStock: book ? book.inStock : "",
    imageUrl: book ? book.imageUrl : "",
    description: book ? book.description : "",
  });

  const handleSubmit = (e) => {
    console.log(e);
  };

  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      ref={ref}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {bookId ? "✏️ Edit Book" : "➕ Add New Book"}
        </h2>

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
          <div className="flex gap-2 flex-col">
            <label htmlFor="imageUrl">Image Url</label>
            <input
              type="number"
              name="imageUrl"
              id="imageUrl"
              value={formData.inStock}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Image Url"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              rows={4}
              type="number"
              name="description"
              id="description"
              value={formData.inStock}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Description"
              style={{ resize: "none" }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => {
              if (onClose) onClose(false);
              router.back();
              if (ref.current) {
                ref.current.style.display = "none";
              }
            }}
          >
            ❌ Cancel
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            💾 {bookId ? "Save Changes" : "Add New Book"}
          </button>
        </div>
      </form>
    </div>
  );
}
