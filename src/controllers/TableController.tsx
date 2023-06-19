import { Breadcrumb, Table } from 'components';
import { useTableController } from 'context';
import { IHandleRowSelect } from 'types/types';

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
    if (state.levels.length - 1 < lvl) {
      return;
    }
    const isRowAlreadyOpen =
      state.levels[lvl].currentActiveRow === currentActiveRow;

    dispatch({
      type: 'SET_CURRENT_CLICKED_ROWS',
      payload: {
        breadcrumbValue,
        lvl,
      },
    });
    dispatch({
      type: 'SET_RESET_ACTIVE_AND_CURRENT_CLICKED_ROWS',
      payload: { lvl, isRowAlreadyOpen },
    });
    dispatch({
      type: 'SET_CURRENT_ACTIVE_ROW',
      payload: {
        lvl,
        currentActiveRow: isRowAlreadyOpen ? '' : currentActiveRow,
      },
    });
  };

  const handleBreadcrumbSelect = (lvl: number) => {
    dispatch({
      type: 'SET_RESET_ACTIVE_AND_CURRENT_CLICKED_ROWS',
      payload: { lvl, isRowAlreadyOpen: true },
    });
    dispatch({
      type: 'SET_CURRENT_ACTIVE_ROW',
      payload: {
        lvl,
        currentActiveRow: '',
      },
    });
  };

  return (
    <>
      <Breadcrumb
        currentClickedRows={currentClickedRows}
        handleBreadcrumbSelect={handleBreadcrumbSelect}
      />
      <Table
        rowsData={data}
        tableConfig={tableConfig}
        handleRowSelect={handleRowSelect}
      />
    </>
  );
};
