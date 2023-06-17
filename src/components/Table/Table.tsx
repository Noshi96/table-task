import { NestedTable, TableRow } from 'components';
import { TableContainerStyled } from './Table.styled';
import { RowData, TableConfigModel } from 'models';
import { TableHead } from 'components';
import { bookConfig } from 'table-configs';

interface ITableProps {
  rowsData: RowData[] | undefined;
  tableConfig: TableConfigModel;
}

export const Table = ({ rowsData, tableConfig }: ITableProps) => {
  //console.log(rowsData);
  const { columns } = tableConfig;

  return (
    <TableContainerStyled>
      <TableHead columns={columns} />
      <tbody>
        {rowsData?.map(singleRowData => {
          return (
            <TableRow
              tableConfig={tableConfig}
              rowData={singleRowData}
              key={`${singleRowData.id}`}
            />
          );
        })}
      </tbody>
    </TableContainerStyled>
  );
};
