import BookListTable from "@/components/BookListTable";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col bg-[#F9FAFB]">
      <div className="bg-gray-100 w-[98%] h-full p-4 rounded-md m-2 ">
        <BookListTable />
      </div>
    </div>
  );
};

export default Dashboard;
