export const getBooksEndPoint = (): URL => {
  const booksEndPoint = new URL(
    `${process.env.REACT_APP_PUBLIC_GOOGLE_API_ENDPOINT}`,
  );
  booksEndPoint.searchParams.set('q', 'car');
  booksEndPoint.searchParams.set('filter', 'free-ebooks');
  booksEndPoint.searchParams.set('maxResults', '15');
  booksEndPoint.searchParams.set(
    'key',
    `${process.env.REACT_APP_PUBLIC_BOOKS_API_KEY}`,
  );
  return booksEndPoint;
};
