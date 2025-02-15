import { Metadata } from "@node_modules/next";
import Navbar from "@src/components/Navbar";
import Sidebar from "@src/components/Sidebar";

// Metadata
export const metadata: Metadata = {
  title: "Users",
  description: "Manage your bookstore easily",
};

const UsersLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="flex ">
      <Sidebar />
      <div className="flex w-full flex-col bg-[#F9FAFB]">
        <Navbar />
        <div className="bg-gray-100 w-[98%] h-full p-4 rounded-md m-2 ">
          {children}
        </div>
      </div>
    </section>
  );
};

export default UsersLayout;
