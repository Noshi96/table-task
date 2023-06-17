import { useQuery } from '@tanstack/react-query';
import { TableHead, TableRow, TableRowStyled } from 'components';
import { NestedTableStyled } from 'components/Table/Table.styled';
import { getBooksEndPoint } from 'endpoints';
import { useGetEndPoint } from 'hooks';
import { BookModel, RowData, TableConfigModel } from 'models';
import { TdStyled } from './NestedTable.styled';

interface INestedTableProps {
  tableConfig: TableConfigModel;
  columnsLength: number;
  endPoint: string;
}

export const NestedTable = ({
  tableConfig,
  columnsLength,
  endPoint,
}: INestedTableProps) => {
  const { columns } = tableConfig;

  const booksEndPoint = useGetEndPoint(getBooksEndPoint);

  const { data, isSuccess } = useQuery({
    queryKey: ['booksKey'],
    queryFn: async (): Promise<RowData[]> => {
      const result = fetch(booksEndPoint);
      const res = await result;
      const data = await res.json().catch(() => ({}));
      //console.log(data);

      return data?.items.map((book: any) => {
        //console.log(book);
        const { volumeInfo } = book;
        const { printType, language, pageCount } = volumeInfo;

        return {
          printType,
          language,
          pageCount,
        } as BookModel;
      });
    },
  });

  return isSuccess ? (
    <tr>
      <TdStyled colSpan={columnsLength}>
        <NestedTableStyled>
          <TableHead columns={columns} />
          <tbody>
            {data.map(singleRowData => {
              return (
                <TableRow
                  key={`${singleRowData.page}`}
                  tableConfig={tableConfig}
                  rowData={singleRowData}
                />
              );
            })}
          </tbody>
        </NestedTableStyled>
      </TdStyled>
    </tr>
  ) : null;
};
