import { IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { RefObject, useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal"; // Import the new confirmation modal

const OptionsModal = ({
  modalRef,
  modalPosition,
  setModalOpen,
  selectedBook,
  setEditModalOpen,
}: {
  modalRef: RefObject<HTMLDivElement | null>;
  modalPosition: { top: number };
  setModalOpen: (state: boolean) => void;
  selectedBook: number | null;
  setEditModalOpen: (state: boolean) => void;
}) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false); // Manage state for delete confirmation
  const router = useRouter();

  const handleEdit = () => {
    setModalOpen(false);
    setEditModalOpen(true);
    router.push(`/books?edit=${selectedBook}`);
  };

  const handleDelete = () => {
    setDeleteModalOpen(true); // Open the delete confirmation modal
    setModalOpen(false); // Close the options modal
  };

  return (
    <div
      ref={modalRef}
      className="bg-white p-6 rounded-lg shadow-lg w-80 absolute z-50 right-20"
      style={{ top: modalPosition.top - 200 }}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setModalOpen(false)}
          className="text-stone-700 font-bold"
        >
          <IconX />
        </button>
      </div>
      <h2 className="text-lg font-semibold mb-4">Book Options</h2>
      <ul className="space-y-3">
        <li>
          <Link
            href={`/books/${selectedBook}`}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            📖 View Details
          </Link>
        </li>
        <li>
          <button
            onClick={handleEdit}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            ✏️ Edit Book
          </button>
        </li>
        <li>
          <button
            onClick={handleDelete}
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 rounded-md"
          >
            🗑️ Delete
          </button>
        </li>
      </ul>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          selectedBook={selectedBook}
          setDeleteModalOpen={setDeleteModalOpen}
        />
      )}
    </div>
  );
};

export default OptionsModal;
