import { ITableControllerDispatch, ITableControllerState } from 'models';
import { useEmpty, useGetAuthors, useGetBook, useGetBooks } from 'services';
import { singleBookConfig } from 'table-configs';
import { authorConfig } from './author-config';
import { bookConfig } from './book-config';

export const tableControllerReducer = (
  state: ITableControllerState,
  action: ITableControllerDispatch,
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
    case 'SET_RESET_STATES_FOR_NESTED_TABLES':
      return action.payload.isRowAlreadyOpen
        ? {
            ...state,
            levels: state.levels.map(lvl =>
              lvl.lvl > action.payload.lvl
                ? {
                    ...lvl,
                    currentActiveRow: '',
                    visitedNestedTable: false,
                  }
                : lvl,
            ),
            currentClickedRows: [
              ...state.currentClickedRows.slice(0, action.payload.lvl - 1),
            ],
          }
        : { ...state };
    case 'SET_CLICKED_ROWS': {
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
    case 'SET_VISITED_NESTED_TABLE':
      return {
        ...state,
        levels: state.levels.map(lvl =>
          lvl.lvl === action.payload.lvl
            ? {
                ...lvl,
                visitedNestedTable: action.payload.visitedNestedTable,
              }
            : lvl,
        ),
      };
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
      visitedNestedTable: false,
      currentActiveRow: '',
      getDataParam: '',
      breadcrumbKey: '',
      breadcrumbValue: '',
    },
    {
      lvl: 1,
      tableConfig: bookConfig,
      useGetDataForRows: useGetBooks,
      visitedNestedTable: false,
      currentActiveRow: '',
      getDataParam: 'authors',
      breadcrumbKey: 'authors',
      breadcrumbValue: '',
    },
    {
      lvl: 2,
      tableConfig: singleBookConfig,
      useGetDataForRows: useGetBook,
      visitedNestedTable: false,
      currentActiveRow: '',
      getDataParam: 'id',
      breadcrumbKey: 'title',
      breadcrumbValue: '',
    },
    {
      lvl: 3,
      tableConfig: singleBookConfig,
      useGetDataForRows: useEmpty,
      visitedNestedTable: false,
      currentActiveRow: '',
      getDataParam: '',
      breadcrumbKey: '',
      breadcrumbValue: '',
    },
  ],
  currentClickedRows: [],
  currentLevel: 0,
};
