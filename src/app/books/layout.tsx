import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({
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

export default DashboardLayout;
