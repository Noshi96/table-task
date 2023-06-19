import { NestedTableStyled } from 'components/Table/Table.styled';
import { RowData, TableConfigModel } from 'models';
import { TableHeadStyled, TableRowStyled } from './NestedTable.styled';

interface INestedTableProps {
  tableConfig: TableConfigModel;
  columnsLength: number;
  clickedRowHeight: number;
  currentLvl: number;
  rowsData: RowData[] | undefined;
  handleRowSelect: Function;
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
  console.log('my', currentLvl);
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
