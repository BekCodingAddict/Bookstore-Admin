import { useState } from "react";

const DeleteConfirmationModal = ({
  selectedBook,
  setDeleteModalOpen,
}: {
  selectedBook: number | null;
  setDeleteModalOpen: (state: boolean) => void;
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      console.log(`Book with ID: ${selectedBook} deleted!`);
      setDeleteModalOpen(false);
    }, 1000);
  };

  const handleCancel = () => {
    setDeleteModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center p-4 z-50">
      <div className="bg-white w-full max-w-sm rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
        <p className="mb-4">Are you sure you want to delete this book?</p>

        <div className="flex justify-end gap-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 ${
              isDeleting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
