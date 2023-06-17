export const getAuthorsEndPoint = (): URL => {
  const authorsEndPoint = new URL(
    `${process.env.REACT_APP_PUBLIC_GOOGLE_API_ENDPOINT}`,
  );
  authorsEndPoint.searchParams.set('q', 'flower');
  authorsEndPoint.searchParams.set('filter', 'free-ebooks');
  authorsEndPoint.searchParams.set('maxResults', '15');
  authorsEndPoint.searchParams.set(
    'key',
    `${process.env.REACT_APP_PUBLIC_BOOKS_API_KEY}`,
  );
  return authorsEndPoint;
};
