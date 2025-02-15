import { getAllBooks } from "@src/utils/services";
import { useQuery } from "@tanstack/react-query";

export const useBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await getAllBooks();
      if (res.status === "error") {
        throw new Error(res.error);
      }

      if (!res.data) {
        throw new Error("No data returned from the API");
      }
      console.log(res);
      return res.data;
    },
  });
};
