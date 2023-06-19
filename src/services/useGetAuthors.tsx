import { useQuery } from '@tanstack/react-query';
import { getAuthorsEndPoint } from 'endpoints';
import { IAuthor, RowData } from 'types';
import { IQueryResponse } from 'types/types';

export const useGetAuthors = () => {
  const authorsEndPoint = getAuthorsEndPoint();
  return useQuery({
    queryKey: ['authorsKey'],
    queryFn: async (): Promise<RowData[]> => {
      const result = fetch(authorsEndPoint);
      const res = await result;
      const data = await res.json().catch(() => ({}));

      return data?.items.map((book: IQueryResponse) => {
        const { volumeInfo } = book;
        const { language } = volumeInfo;

        const authors = volumeInfo?.authors?.[0] || 'not-given';

        return {
          id: `${book.id}bb`,
          authors,
          language,
        } as IAuthor;
      });
    },
  });
};
