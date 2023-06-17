export const useGetEndPoint = (endPointUrl: () => URL): URL => {
  return endPointUrl();
};
