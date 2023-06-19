import { ITableControllerDispatch, ITableControllerState } from 'models';
import { useGetAuthors, useGetBooks } from 'services';
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
    case 'SET_LEVEL':
      return {
        ...state,
        currentLevel: action.payload,
      };
    case 'SET_CLICKED_ROWS': {
      if (action.payload) {
      }

      return {
        ...state,
        currentClickedRows: [...state.currentClickedRows, action.payload],
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

export const initialTableControllerState = {
  levels: [
    {
      lvl: 0,
      tableConfig: authorConfig,
      useGetDataForRows: useGetAuthors,
      visitedNestedTable: false,
      currentActiveRow: '',
    },
    {
      lvl: 1,
      tableConfig: bookConfig,
      useGetDataForRows: useGetBooks,
      visitedNestedTable: false,
      currentActiveRow: '',
    },
    {
      lvl: 2,
      tableConfig: bookConfig,
      useGetDataForRows: useGetBooks,
      visitedNestedTable: false,
      currentActiveRow: '',
    },
    {
      lvl: 3,
      tableConfig: bookConfig,
      useGetDataForRows: useGetBooks,
      visitedNestedTable: false,
      currentActiveRow: '',
    },
    {
      lvl: 4,
      tableConfig: bookConfig,
      useGetDataForRows: useGetBooks,
      visitedNestedTable: false,
      currentActiveRow: '',
    },
  ],
  currentClickedRows: [],
  currentLevel: 0,
};
