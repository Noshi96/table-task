import { useQuery } from '@tanstack/react-query';
import { authorConfig } from 'table-configs';
import { AuthorModel } from 'models';
import { Breadcrumb, Table } from 'components';
import { getAuthorsEndPoint } from 'endpoints';
import { useGetEndPoint } from 'hooks';
import { PageContainerStyled, PageHeaderStyled } from './MainPageView.styled';

export const MainPageView = () => {
  const authorsEndPoint = useGetEndPoint(getAuthorsEndPoint);

  const { data } = useQuery({
    queryKey: ['bookData'],
    queryFn: async (): Promise<AuthorModel[]> => {
      const result = fetch(authorsEndPoint);
      const res = await result;
      const data = await res.json().catch(() => ({}));
      console.log(data);

      return data?.items.map((book: any, index: number) => {
        console.log(book);
        const { volumeInfo } = book;
        const { title, publishedDate, printType, language, pageCount } =
          volumeInfo;

        const categories = volumeInfo?.categories?.[0] || 'not-given';
        const authors = volumeInfo?.authors?.[0] || 'not-given';

        if (index === 3) {
          return {
            printType,
            language,
            pageCount,
          };
        }

        return {
          id: book.id,
          authors,
          title,
          publishedDate: publishedDate,
          categories,
        };
      });
    },
  });

  return (
    <PageContainerStyled>
      <PageHeaderStyled>Click the author</PageHeaderStyled>
      <Breadcrumb />
      <Table rowsData={data} tableConfig={authorConfig} />
    </PageContainerStyled>
  );
};
