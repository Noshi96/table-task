import { TableRowStyled } from 'components/TableRow/TableRow.styled';
import { AuthorModel, TableConfigModel } from 'models';

type TableRowProps = {
  tableConfig: TableConfigModel;
  rowData: AuthorModel;
} & React.HTMLProps<HTMLTableRowElement>;

export const TableRow = ({
  rowData,
  tableConfig,
  className,
}: TableRowProps) => {
  const { columns } = tableConfig;
  console.log(rowData);
  return (
    <TableRowStyled onClick={() => {}} className={className}>
      {columns.map(column => {
        return (
          <td key={`${column.columnName}-td`}>
            {rowData[column.columnName as keyof AuthorModel]}
          </td>
        );
      })}
    </TableRowStyled>
  );
};
