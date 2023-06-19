export const getBooksEndPoint = (authorName: string): string => {
  const endpoint = `${
    process.env.REACT_APP_PUBLIC_GOOGLE_API_ENDPOINT
  }?q=inauthor:"${authorName.replaceAll(
    ' ',
    '+',
  )}"&filter=paid-ebooks&maxResults=15&printType=books`;
  return endpoint;
};
