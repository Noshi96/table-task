export const getBookEndPoint = (isbn: string): URL => {
  const bookEndPoint = new URL(`https://www.googleapis.com/books/v1/volumes`);
  bookEndPoint.searchParams.set('q', `isbn:${isbn}`);
  return bookEndPoint;
};
