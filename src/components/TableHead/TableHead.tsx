import { ColumnModel } from 'models';
import { TableHeadStyled } from './TableHead.styled';

type TableHeadProps = {
  columns: ColumnModel[];
} & React.HTMLProps<HTMLTableElement>;

export const TableHead = ({ columns, className }: TableHeadProps) => {
  return (
    <TableHeadStyled className={className}>
      <tr>
        {columns.map(column => {
          return <th key={column.columnName}>{column.columnName}</th>;
        })}
      </tr>
    </TableHeadStyled>
  );
};
