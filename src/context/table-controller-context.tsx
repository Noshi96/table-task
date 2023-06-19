import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { ITableControllerDispatch, ITableControllerState } from 'types';
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
    type: '',
    payload: undefined,
  } as unknown as Dispatch<ITableControllerDispatch>,
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
