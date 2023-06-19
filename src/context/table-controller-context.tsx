import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { TableControllerActionsType, ITableControllerState } from 'types';
import {
  initialTableControllerState,
  tableControllerReducer,
} from 'table-configs';

const TableControllerContext = createContext({
  state: {
    levels: [
      {
        lvl: 0,
        useGetDataForRows: () => {},
        getDataParam: '',
        breadcrumbKey: '',
        currentActiveRow: '',
        tableConfig: {
          columns: [
            {
              columnName: '',
            },
          ],
        },
      },
    ],
    currentClickedRows: [''],
    currentLevel: 0,
  } as ITableControllerState,
  dispatch: {
    type: 'SET_CURRENT_ACTIVE_ROW',
    payload: { lvl: 0, currentActiveRow: '' },
  } as unknown as Dispatch<TableControllerActionsType>,
});

export const TableControllerProvider = ({
  children,
}: React.HTMLProps<HTMLDivElement>) => {
  const [state, dispatch] = useReducer(
    tableControllerReducer,
    initialTableControllerState,
  );

  return (
    <TableControllerContext.Provider value={{ state, dispatch }}>
      {children}
    </TableControllerContext.Provider>
  );
};

export const useTableController = () => useContext(TableControllerContext);
