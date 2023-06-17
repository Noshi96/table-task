import { TableRow } from 'components';
import { TableContainerStyled, NestedTableStyled } from './Table.styled';
import { AuthorModel, TableConfigModel } from 'models';
import { bookConfig } from 'table-configs/book-config';
import { TableHead } from 'components';
import { TableRowStyled } from 'components/TableRow/TableRow.styled';
import styled from 'styled-components';

interface ITableProps {
  rowsData: AuthorModel[] | undefined;
  tableConfig: TableConfigModel;
}

const TableRowElementStyled = styled(TableRowStyled)`
  td {
    padding: 0 1rem;
  }

  tr > td {
    padding: 1rem 0 1rem 1rem;
  }

  th {
    padding: 1rem;
  }
`;

export const Table = ({ rowsData, tableConfig }: ITableProps) => {
  console.log(rowsData);
  const { columns } = tableConfig;
  return (
    <TableContainerStyled>
      <TableHead columns={columns} />
      <tbody>
        {rowsData?.map((singleRowData, index) => {
          if (index === 3) {
            return (
              <TableRowElementStyled key={`${singleRowData.id}-nested`}>
                <td colSpan={columns.length}>
                  <NestedTableStyled>
                    <TableHead columns={bookConfig.columns} />
                    <tbody>
                      <TableRow
                        tableConfig={bookConfig}
                        rowData={singleRowData}
                      />
                    </tbody>
                  </NestedTableStyled>
                </td>
              </TableRowElementStyled>
            );
          }
          return (
            <TableRow
              tableConfig={tableConfig}
              rowData={singleRowData}
              key={singleRowData.id}
            />
          );
        })}
      </tbody>
    </TableContainerStyled>
  );
};
