export const getBookEndPoint = (isbn: string): string => {
  const endpoint = `${process.env.REACT_APP_PUBLIC_GOOGLE_API_ENDPOINT}?q=isbn:${isbn}`;
  return endpoint;
};
