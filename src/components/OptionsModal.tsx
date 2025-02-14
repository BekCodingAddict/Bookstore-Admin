import { IconX } from "@tabler/icons-react";
import React, { RefObject } from "react";

const OptionsModal = ({
  modalRef,
  modalPosition,
  setModalOpen,
}: {
  modalRef: RefObject<HTMLDivElement | null>;
  modalPosition: { top: number };
  setModalOpen: (state: boolean) => void;
}) => {
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
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            📖 View Details
          </button>
        </li>
        <li>
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            ✏️ Edit Book
          </button>
        </li>
        <li>
          <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 rounded-md">
            🗑️ Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

// export default OptionsModal;
// import { IconX } from "@tabler/icons-react";
// import React, { RefObject } from "react";
// const OptionsModal = ({
//   ref,
//   modal,
//   closeModal,
// }: {
//   ref: RefObject<HTMLDivElement | null>;
//   modal: { open: boolean; x: number; y: number };
//   closeModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }) => {
//   return (
//     <div
//       ref={ref}
//       className="bg-white p-6 rounded-lg shadow-lg w-80 absolute z-50 "
//       style={{ top: modal.x, right: modal.y }}
//     >
//       <div className="flex justify-end">
//         <button onClick={closeModal} className="text-stone-700 font-bold">
//           <IconX />
//         </button>
//       </div>
//       <h2 className="text-lg font-semibold mb-4">Book Options</h2>
//       <ul className="space-y-3">
//         <li>
//           <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
//             📖 View Details
//           </button>
//         </li>
//         <li>
//           <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
//             ✏️ Edit Book
//           </button>
//         </li>
//         <li>
//           <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 rounded-md">
//             🗑️ Delete
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

export default OptionsModal;
