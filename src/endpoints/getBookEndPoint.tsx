export const getBookEndPoint = (isbn: string): string => {
  const endpoint = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
  return endpoint;
};
