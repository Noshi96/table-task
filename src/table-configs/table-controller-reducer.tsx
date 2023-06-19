import { TableControllerActionsType, ITableControllerState } from 'types';
import { useEmpty, useGetAuthors, useGetBook, useGetBooks } from 'services';
import { singleBookConfig } from 'table-configs';
import { authorConfig } from './author-config';
import { bookConfig } from './book-config';

export const tableControllerReducer = (
  state: ITableControllerState,
  action: TableControllerActionsType,
) => {
  switch (action.type) {
    case 'SET_CURRENT_ACTIVE_ROW':
      return {
        ...state,
        levels: state.levels.map(lvl =>
          lvl.lvl === action.payload.lvl
            ? {
                ...lvl,
                currentActiveRow: action.payload.currentActiveRow,
              }
            : lvl,
        ),
      };
    case 'SET_RESET_ACTIVE_AND_CURRENT_CLICKED_ROWS':
      return action.payload.isRowAlreadyOpen
        ? {
            ...state,
            levels: state.levels.map(lvl =>
              lvl.lvl > action.payload.lvl
                ? {
                    ...lvl,
                    currentActiveRow: '',
                  }
                : lvl,
            ),
            currentClickedRows: [
              ...state.currentClickedRows.slice(0, action.payload.lvl - 1),
            ],
          }
        : { ...state };
    case 'SET_CURRENT_CLICKED_ROWS': {
      const updatedClickedRows = state.currentClickedRows.slice(
        0,
        action.payload.lvl - 1,
      );
      return {
        ...state,
        currentClickedRows: [
          ...updatedClickedRows,
          action.payload.breadcrumbValue,
        ],
      };
    }
    default:
      return state;
  }
};

export const initialTableControllerState: ITableControllerState = {
  levels: [
    {
      lvl: 0,
      tableConfig: authorConfig,
      useGetDataForRows: useGetAuthors,
      currentActiveRow: '',
      getDataParam: '',
      breadcrumbKey: '',
    },
    {
      lvl: 1,
      tableConfig: bookConfig,
      useGetDataForRows: useGetBooks,
      currentActiveRow: '',
      getDataParam: 'authors',
      breadcrumbKey: 'authors',
    },
    {
      lvl: 2,
      tableConfig: singleBookConfig,
      useGetDataForRows: useGetBook,
      currentActiveRow: '',
      getDataParam: 'id',
      breadcrumbKey: 'title',
    },
    {
      lvl: 3,
      tableConfig: singleBookConfig,
      useGetDataForRows: useEmpty,
      currentActiveRow: '',
      getDataParam: '',
      breadcrumbKey: '',
    },
  ],
  currentClickedRows: [],
  currentLevel: 0,
};
