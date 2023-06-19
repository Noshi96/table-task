import { IColumn } from 'types';
import { columnsMapper } from 'utils';
import { TableHeadStyled } from './TableHead.styled';

type TableHeadProps = {
  columns: IColumn[];
} & React.HTMLProps<HTMLTableElement>;

export const TableHead = ({ columns, className }: TableHeadProps) => {
  return (
    <TableHeadStyled className={className}>
      <tr>
        {columns.map(column => {
          return (
            <th key={column.columnName}>{columnsMapper(column.columnName)}</th>
          );
        })}
      </tr>
    </TableHeadStyled>
  );
};
