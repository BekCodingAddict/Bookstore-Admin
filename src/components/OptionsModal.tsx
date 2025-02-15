import {
  IconEdit,
  IconTrashX,
  IconVocabulary,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { RefObject } from "react";

const OptionsModal = ({
  modalRef,
  modalPosition,
  setModalOpen,
  selectedBook,
  setEditModalOpen,
  handleDelete,
}: {
  modalRef: RefObject<HTMLDivElement | null>;
  modalPosition: { top: number };
  setModalOpen: (state: boolean) => void;
  selectedBook: number | null;
  setEditModalOpen: (state: boolean) => void;
  handleDelete: () => void;
}) => {
  const router = useRouter();

  const handleEdit = () => {
    setModalOpen(false);
    setEditModalOpen(true);
    router.push(`/books?edit=${selectedBook}`);
  };

  return (
    <div
      ref={modalRef}
      className="bg-white p-6 rounded-lg shadow-xl w-80 absolute z-50 right-20"
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
      <h2 className="text-lg font-semibold mb-4 text-stone-700">
        Book Options
      </h2>
      <ul className="space-y-3">
        <li>
          <Link
            href={`/books/${selectedBook}`}
            className="w-full flex flex-row gap-2 items-center justify-center text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <IconVocabulary />
            <span> View Details</span>
          </Link>
        </li>
        <li>
          <button
            onClick={handleEdit}
            className="w-full flex flex-row gap-2 items-center justify-center text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <IconEdit /> <span>Edit Book</span>
          </button>
        </li>
        <li>
          <button
            onClick={handleDelete}
            className="w-full  flex flex-row gap-2 items-center justify-center text-left px-4 py-2 text-red-600 hover:bg-red-100 rounded-md"
          >
            <IconTrashX />
            <span> Delete</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default OptionsModal;
