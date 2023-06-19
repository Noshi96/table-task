import { useQuery } from '@tanstack/react-query';
import { getBooksEndPoint } from 'endpoints';
import { IBook, RowData } from 'types';
import { IQueryResponse } from 'types/types';

export const useGetBooks = (authorName?: string) => {
  const booksEndPoint = getBooksEndPoint(authorName || '');

  return useQuery({
    queryKey: ['booksKey', authorName],
    queryFn: async (): Promise<RowData[]> => {
      const result = fetch(booksEndPoint);
      const res = await result;
      const data = await res.json().catch(() => ({}));

      return data.totalItems !== 0
        ? data?.items.map((book: IQueryResponse) => {
            const { volumeInfo } = book;
            const { title, industryIdentifiers } = volumeInfo;

            const categories = volumeInfo?.categories?.[0] || 'not-given';
            const authors = volumeInfo?.authors?.[0] || 'not-given';

            return {
              id: industryIdentifiers[0].identifier,
              authors,
              title,
              categories,
            } as IBook;
          })
        : [];
    },
  });
};
