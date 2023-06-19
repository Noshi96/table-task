export const getAuthorsEndPoint = (): URL => {
  const authorsEndPoint = new URL(
    `${process.env.REACT_APP_PUBLIC_GOOGLE_API_ENDPOINT}`,
  );
  authorsEndPoint.searchParams.set('q', 'subject:Fiction');
  authorsEndPoint.searchParams.set('filter', 'paid-ebooks');
  authorsEndPoint.searchParams.set('maxResults', '15');
  authorsEndPoint.searchParams.set('printType', 'books');
  return authorsEndPoint;
};
