import { NestedTable } from 'components';
import { TableRowStyled, TdStyled } from 'components/TableRow/TableRow.styled';
import { TableConfigModel, RowData } from 'models';
import { useState } from 'react';
import { bookConfig } from 'table-configs';

type TableRowProps = {
  tableConfig: TableConfigModel;
  rowData: RowData;
} & React.HTMLProps<HTMLTableRowElement>;

export const TableRow = ({
  rowData,
  tableConfig,
  className,
}: TableRowProps) => {
  const { columns } = tableConfig;

  const [showMoreInformation, setShowMoreInformation] = useState(false);
  return (
    <>
      <TableRowStyled
        onClick={() => {
          console.log('stala ptaka');
          setShowMoreInformation(prev => !prev);
        }}
        className={className}
      >
        {columns.map(column => {
          return (
            <TdStyled key={`${column.columnName}-td`}>
              {rowData[column.columnName]}
            </TdStyled>
          );
        })}
      </TableRowStyled>
      {showMoreInformation && (
        <NestedTable
          tableConfig={bookConfig}
          columnsLength={tableConfig.columns.length}
          endPoint={'elo'}
        />
      )}
    </>
  );
};