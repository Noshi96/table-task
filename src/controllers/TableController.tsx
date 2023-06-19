import { Breadcrumb, Table } from 'components';
import { useTableController } from 'context';

interface IHandleRowSelect {
  lvl: number;
  currentActiveRow: string;
  breadcrumbValue: string;
}

export const TableController = () => {
  const { state, dispatch } = useTableController();

  const { currentLevel, levels, currentClickedRows } = state;
  const { tableConfig, useGetDataForRows } = levels[currentLevel];

  const { data } = useGetDataForRows();

  const handleRowSelect = ({
    lvl,
    currentActiveRow,
    breadcrumbValue,
  }: IHandleRowSelect) => {
    console.log(state.levels.length, 'clicable', lvl);
    if (state.levels.length - 1 < lvl) {
      return;
    }

    const isRowAlreadyOpen =
      state.levels[lvl].currentActiveRow === currentActiveRow;

    dispatch({
      type: 'SET_CLICKED_ROWS',
      payload: {
        breadcrumbValue,
        lvl,
      },
    });
    dispatch({
      type: 'SET_RESET_STATES_FOR_NESTED_TABLES',
      payload: { lvl, isRowAlreadyOpen },
    });
    dispatch({
      type: 'SET_VISITED_NESTED_TABLE',
      payload: { lvl, visitedNestedTable: !isRowAlreadyOpen },
    });
    dispatch({
      type: 'SET_CURRENT_ACTIVE_ROW',
      payload: {
        lvl,
        currentActiveRow: isRowAlreadyOpen ? '' : currentActiveRow,
      },
    });
  };

  return (
    <>
      <Breadcrumb currentClickedRows={currentClickedRows} />
      <Table
        rowsData={data}
        tableConfig={tableConfig}
        handleRowSelect={handleRowSelect}
      />
    </>
  );
};
