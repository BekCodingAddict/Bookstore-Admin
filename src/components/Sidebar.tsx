"use client";
import {
  IconBooks,
  IconCheckupList,
  IconChevronsLeft,
  IconChevronsRight,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import Image from "next/image";
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
      <div className="p-4 text-2xl font-semibold flex gap-4 h-auto">
        <Image
          className="rounded-full w-14 h-14 border-4 border-slate-700 shadow-md object-cover"
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          width={50}
          height={50}
          alt="User's profile image"
        />

        <div className="flex w-full flex-col">
          <h1 className="text-lg"> John Doe</h1>
          <p className="text-sm font-semibold">Manager</p>
        </div>
      </div>
      <ul className="mt-8 space-y-4 px-4">
        <li>
          <NavLink
            href="/books"
            className="flex items-center p-3 hover:bg-stone-200 rounded-md active:bg-stone-200 text-xl"
          >
            <IconBooks />{" "}
            {isOpen === false && <span className="ml-2"> Books</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/orders"
            className="flex items-center p-3 hover:bg-stone-200 rounded-md "
          >
            <IconCheckupList />{" "}
            {isOpen === false && <span className="ml-2"> Orders</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/users"
            className="flex items-center p-3 hover:bg-stone-200 rounded-md "
          >
            <IconUsers />
            {isOpen === false && <span className="ml-2"> Users</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            href="settings"
            className="flex items-center p-3 hover:bg-stone-200 rounded-md "
          >
            <IconSettings />{" "}
            {isOpen === false && <span className="ml-2"> Settings</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
