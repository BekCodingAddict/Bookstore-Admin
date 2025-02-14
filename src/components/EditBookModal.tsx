"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function EditBookModal({
  onClose,
}: {
  onClose?: (state: boolean) => void;
}) {
  const searchParams = useSearchParams();
  const bookId = searchParams.get("edit");
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  const initialFormData = {
    title: "",
    author: "",
    price: "",
    category: "",
    inStock: "",
    imageUrl: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const fetchBook = async (id: string) => {
      try {
        const response = await fetch(`/api/books/${id}`);
        if (!response.ok) {
          console.log("Book not found");
          return;
        }
        const bookData = await response.json();
        setFormData({
          title: bookData.title || "",
          author: bookData.author || "",
          price: bookData.price || "",
          category: bookData.category || "",
          inStock: bookData.inStock || "",
          imageUrl: bookData.imageUrl || "",
          description: bookData.description || "",
        });
      } catch (error) {
        console.log("Failed to fetch a book! Error:", error);
      }
    };

    if (bookId) {
      fetchBook(String(bookId));
    } else {
      setFormData(initialFormData);
    }
  }, [bookId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/books${bookId ? "/" + bookId : ""}`, {
        method: bookId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok && onClose) {
        router.push("/books");
        onClose(false);
      } else {
        throw new Error("Failed to submit book data!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

        <div className="space-y-4">
          {[
            "title",
            "author",
            "price",
            "category",
            "inStock",
            "imageUrl",
            "description",
          ].map((field) => (
            <div key={field} className="flex gap-2 flex-col">
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === "description" ? (
                <textarea
                  rows={4}
                  name={field}
                  id={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder={`Enter ${field}`}
                  style={{ resize: "none" }}
                />
              ) : (
                <input
                  type={
                    field === "price" || field === "inStock" ? "number" : "text"
                  }
                  name={field}
                  id={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder={`Enter ${field}`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
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
