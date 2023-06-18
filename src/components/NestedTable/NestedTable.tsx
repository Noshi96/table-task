import { useQuery } from '@tanstack/react-query';
import { NestedTableStyled } from 'components/Table/Table.styled';
import { getBooksEndPoint } from 'endpoints';
import { useGetEndPoint } from 'hooks';
import { BookModel, RowData, TableConfigModel } from 'models';
import { TableHeadStyled, TableRowStyled } from './NestedTable.styled';

interface INestedTableProps {
  tableConfig: TableConfigModel;
  columnsLength: number;
  endPoint: string;
  clickedRowHeight: number;
}

export const NestedTable = ({
  tableConfig,
  columnsLength,
  endPoint,
  clickedRowHeight,
}: INestedTableProps) => {
  const { columns } = tableConfig;

  const booksEndPoint = useGetEndPoint(getBooksEndPoint);
  const clickedRowHeightRem = `${clickedRowHeight / 16}rem`;

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
      <td colSpan={columnsLength}>
        <NestedTableStyled>
          <TableHeadStyled
            columns={columns}
            clickedRowHeightRem={clickedRowHeightRem}
          />
          <tbody>
            {data.map(singleRowData => {
              return (
                <TableRowStyled
                  key={`${singleRowData.page}`}
                  tableConfig={tableConfig}
                  rowData={singleRowData}
                  clickedRowHeightRem={clickedRowHeightRem}
                />
              );
            })}
          </tbody>
        </NestedTableStyled>
      </td>
    </tr>
  ) : null;
};
