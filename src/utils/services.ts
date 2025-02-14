export const getBookById = async (bookId: number) => {
  try {
    const response = await fetch(`/api/books/${bookId}`);
    const book = await response.json();
    if (!response.ok) {
      console.log("Book not found");
    }
    return book;
  } catch (error) {
    console.log("Faild to fetch a book! Error:" + error);
  }
};
