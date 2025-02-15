export const getBookById = async (bookId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/books/${bookId}`
    );

    if (!response.ok) {
      console.log("Book not found");
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch a book! Error:", error);
    return null;
  }
};

export const getAllBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/books`
    );

    if (!response.ok) {
      console.log("Book not found");
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch a books! Error:", error);
    return null;
  }
};
