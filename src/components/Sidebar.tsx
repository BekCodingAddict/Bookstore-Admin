import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white shadow-lg">
      <div className="p-4 text-2xl font-semibold">Dashboard</div>
      <ul className="mt-8 space-y-4 px-4">
        <li>
          <a
            href="#"
            className="flex items-center p-3 hover:bg-indigo-700 rounded-md"
          >
            <span>📚 Books</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 hover:bg-indigo-700 rounded-md"
          >
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 hover:bg-indigo-700 rounded-md"
          >
            <span>User</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 hover:bg-indigo-700 rounded-md"
          >
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
