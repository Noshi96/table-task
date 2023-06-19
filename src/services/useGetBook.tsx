import { useQuery } from '@tanstack/react-query';
import { getBookEndPoint } from 'endpoints';
import { RowData } from 'types';

export const useGetBook = (isbn: string) => {
  const booksEndPoint = getBookEndPoint(isbn);

  return useQuery({
    queryKey: ['bookKey', isbn],
    queryFn: async (): Promise<RowData[]> => {
      if (isbn === '') {
        return [];
      }
      const result = fetch(booksEndPoint);
      const res = await result;
      const data = await res.json().catch(() => ({}));

      return data.totalItems !== 0
        ? data?.items.map((book: any) => {
            const { volumeInfo } = book;
            const { industryIdentifiers } = volumeInfo;

            return {
              isbn: industryIdentifiers[0].identifier,
            };
          })
        : [];
    },
  });
};
