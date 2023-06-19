export const getBooksEndPoint = (authorName: string): string => {
  const booksEndPoint = new URL(`https://www.googleapis.com/books/v1/volumes`);
  booksEndPoint.searchParams.set(
    'q',
    `inauthor:"${authorName.replaceAll(' ', '+')}"`,
  );
  booksEndPoint.searchParams.set('filter', 'paid-ebooks');
  booksEndPoint.searchParams.set('maxResults', '15');
  booksEndPoint.searchParams.set('printType', 'books');

  return `${booksEndPoint}`;
};
