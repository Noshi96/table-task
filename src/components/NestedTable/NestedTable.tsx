import { NestedTableStyled } from 'components/Table/Table.styled';
import { RowData, ITableConfig, IHandleRowSelect } from 'types';
import { TableHeadStyled, TableRowStyled } from './NestedTable.styled';

interface INestedTableProps {
  tableConfig: ITableConfig;
  columnsLength: number;
  clickedRowHeight: number;
  currentLvl: number;
  rowsData: RowData[] | undefined;
  handleRowSelect: (params: IHandleRowSelect) => void;
}

export const NestedTable = ({
  tableConfig,
  columnsLength,
  clickedRowHeight,
  currentLvl,
  rowsData,
  handleRowSelect,
}: INestedTableProps) => {
  const { columns } = tableConfig;
  const clickedRowHeightRem = `${clickedRowHeight / 16}rem`;

  return rowsData ? (
    <tr>
      <td colSpan={columnsLength}>
        <NestedTableStyled>
          <TableHeadStyled
            columns={columns}
            clickedRowHeightRem={clickedRowHeightRem}
          />
          <tbody>
            {rowsData?.map(singleRowData => {
              return (
                <TableRowStyled
                  key={`${singleRowData.id}`}
                  tableConfig={tableConfig}
                  rowData={singleRowData}
                  clickedRowHeightRem={clickedRowHeightRem}
                  currentLvl={currentLvl}
                  handleRowSelect={handleRowSelect}
                />
              );
            })}
          </tbody>
        </NestedTableStyled>
      </td>
    </tr>
  ) : null;
};
