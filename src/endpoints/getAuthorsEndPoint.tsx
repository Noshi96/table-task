export const getAuthorsEndPoint = (): URL => {
  const authorsEndPoint = new URL(
    `https://www.googleapis.com/books/v1/volumes`,
  );
  authorsEndPoint.searchParams.set('q', 'subject:Fiction');
  authorsEndPoint.searchParams.set('filter', 'paid-ebooks');
  authorsEndPoint.searchParams.set('maxResults', '15');
  authorsEndPoint.searchParams.set('printType', 'books');
  return authorsEndPoint;
};
