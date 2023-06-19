import { useRef, useState } from 'react';
import { NestedTable } from 'components';
import { useTableController } from 'context';
import { ITableConfig, RowData, IHandleRowSelect } from 'types';
import { TableRowStyled, TdStyled } from './TableRow.styled';

type TableRowProps = {
  tableConfig: ITableConfig;
  rowData: RowData;
  currentLvl: number;
  handleRowSelect: (params: IHandleRowSelect) => void;
} & React.HTMLProps<HTMLTableRowElement>;

export const TableRow = ({
  rowData,
  tableConfig,
  className,
  currentLvl,
  handleRowSelect,
}: TableRowProps) => {
  const [param, setParam] = useState('');
  const trRef = useRef<HTMLTableRowElement>(null);

  const { state } = useTableController();
  const { levels } = state;
  const {
    tableConfig: nestedConfig,
    useGetDataForRows,
    currentActiveRow,
    getDataParam,
    breadcrumbKey,
  } = levels[currentLvl];
  const { data } = useGetDataForRows(param);

  const { columns } = tableConfig;
  const activeRowId = rowData.id;

  return (
    <>
      <TableRowStyled
        onClick={() => {
          handleRowSelect({
            lvl: currentLvl,
            currentActiveRow: `${activeRowId}`,
            breadcrumbValue: `${rowData[breadcrumbKey]}`,
          });
          setParam(`${rowData[getDataParam]}`);
        }}
        className={className}
        isActive={activeRowId === currentActiveRow}
        ref={trRef}
      >
        {columns.map(column => {
          return (
            <TdStyled key={`${activeRowId}${column.columnName}-td`}>
              {rowData[column.columnName]}
            </TdStyled>
          );
        })}
      </TableRowStyled>
      {activeRowId === currentActiveRow ? (
        <NestedTable
          tableConfig={nestedConfig}
          columnsLength={tableConfig.columns.length}
          clickedRowHeight={trRef.current?.clientHeight || 0}
          currentLvl={currentLvl + 1}
          rowsData={data}
          handleRowSelect={handleRowSelect}
        />
      ) : null}
    </>
  );
};
