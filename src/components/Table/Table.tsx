import { TableRow } from 'components';
import { TableContainerStyled } from './Table.styled';
import { RowData, ITableConfig, IHandleRowSelect } from 'types';
import { TableHead } from 'components';

interface ITableProps {
  rowsData: RowData[] | undefined;
  tableConfig: ITableConfig;
  handleRowSelect: (params: IHandleRowSelect) => void;
}

export const Table = ({
  rowsData,
  tableConfig,
  handleRowSelect,
}: ITableProps) => {
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
              currentLvl={1}
              handleRowSelect={handleRowSelect}
            />
          );
        })}
      </tbody>
    </TableContainerStyled>
  );
};
