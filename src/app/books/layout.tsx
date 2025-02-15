import { Metadata } from "@node_modules/next";
import Navbar from "@src/components/Navbar";
import Sidebar from "@src/components/Sidebar";

// Metadata
export const metadata: Metadata = {
  title: "Books",
  description: "Manage your bookstore easily",
};

const BooksLayout = ({
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

export default BooksLayout;
