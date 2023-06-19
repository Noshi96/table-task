import { Breadcrumb, Table } from 'components';
import { useTableController } from 'context';
import { useState } from 'react';

export const TableController = () => {
  const { state, dispatch } = useTableController();

  const { currentLevel, levels } = state;
  const { tableConfig, useGetDataForRows } = levels[currentLevel];

  const { data } = useGetDataForRows();

  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

  const handleRowSelect = ({
    lvl,
    currentActiveRow,
  }: {
    lvl: number;
    currentActiveRow: string;
  }) => {
    if (state.levels.length - 1 < lvl) {
      return;
    }
    setBreadcrumbs([...breadcrumbs, currentActiveRow]);
    const isRowAlreadyOpen =
      state.levels[lvl].currentActiveRow === currentActiveRow;
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
      <Breadcrumb />
      <Table
        rowsData={data}
        tableConfig={tableConfig}
        handleRowSelect={handleRowSelect}
      />
    </>
  );
};
