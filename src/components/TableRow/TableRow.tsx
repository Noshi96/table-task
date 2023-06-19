import { NestedTable } from 'components';
import { TableRowStyled, TdStyled } from 'components/TableRow/TableRow.styled';
import { useTableController } from 'context';
import { TableConfigModel, RowData } from 'models';
import { useRef, useState } from 'react';

type TableRowProps = {
  tableConfig: TableConfigModel;
  rowData: RowData;
  currentLvl: number;
  handleRowSelect: Function;
} & React.HTMLProps<HTMLTableRowElement>;

export const TableRow = ({
  rowData,
  tableConfig,
  className,
  currentLvl,
  handleRowSelect,
}: TableRowProps) => {
  const { columns } = tableConfig;

  const trRef = useRef<HTMLTableRowElement>(null);
  const [authorName, setAuthorName] = useState('');

  const { state } = useTableController();
  const { levels } = state;
  console.log(state);
  console.log(levels);
  console.log(rowData.id);
  console.log(currentLvl);
  const {
    tableConfig: nestedConfig,
    useGetDataForRows,
    currentActiveRow,
    getDataParam,
    breadcrumbKey,
  } = levels[currentLvl];

  const [param, setParam] = useState('');

  const { data } = useGetDataForRows(param);
  const activeRowId = rowData.id;

  return (
    <>
      <TableRowStyled
        onClick={() => {
          handleRowSelect({
            lvl: currentLvl,
            currentActiveRow: `${activeRowId}`,
            breadcrumbValue: rowData[breadcrumbKey],
          });
          setParam(`${rowData[getDataParam]}`);
        }}
        className={className}
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
