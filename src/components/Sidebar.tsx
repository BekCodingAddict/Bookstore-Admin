"use client";
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";

import { useState } from "react";
import { NavLink } from "./NavLink";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen === false ? "w-64" : "w-20"
      } h-screen bg-[#FFFFFF] text-stone-700 shadow-lg position-fixed left-0`}
    >
      <div className="flex items-center justify-end p-2">
        {isOpen === false ? (
          <button
            onClick={() => setIsOpen((state) => !state)}
            type="button"
            className="p-2 hover:bg-stone-200 rounded-md"
          >
            <IconChevronsLeft />
          </button>
        ) : (
          <button
            onClick={() => setIsOpen((state) => !state)}
            type="button"
            className="p-2 hover:bg-stone-200 rounded-md"
          >
            <IconChevronsRight />
          </button>
        )}
      </div>
      <div className="p-4 text-2xl font-semibold">Dashboard</div>
      <ul className="mt-8 space-y-4 px-4">
        <li>
          <NavLink
            href="/books"
            className="flex items-center p-3 hover:bg-stone-200 rounded-md active:bg-stone-200 text-xl"
          >
            📚 {isOpen === false && <span className="ml-2"> Books</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/orders"
            className="flex items-center p-3 hover:bg-stone-200 rounded-md "
          >
            📑 {isOpen === false && <span className="ml-2"> Orders</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/users"
            className="flex items-center p-3 hover:bg-stone-200 rounded-md "
          >
            🙍‍♂️{isOpen === false && <span className="ml-2"> Users</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            href="settings"
            className="flex items-center p-3 hover:bg-stone-200 rounded-md "
          >
            ⚙ {isOpen === false && <span className="ml-2"> Settings</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
