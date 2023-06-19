import { UseQueryResult } from '@tanstack/react-query';

export interface IAuthor {
  id: string;
  authors: string;
  language: string;
}

export interface IBook {
  id: string;
  authors: string;
  title: string;
  categories: string;
}

export interface IColumn {
  columnName: string;
}

export interface ITableConfig {
  columns: IColumn[];
}

export interface RowData {
  [key: string]: React.ReactNode;
}

export interface IStateInSingleLvl {
  lvl: number;
  tableConfig: ITableConfig;
  useGetDataForRows: (value?: string) => UseQueryResult<RowData[], unknown>;
  getDataParam: string;
  currentActiveRow: string;
  breadcrumbKey: string;
}

export interface ITableControllerState {
  levels: IStateInSingleLvl[];
  currentClickedRows: string[];
  currentLevel: number;
}

interface ICurrentActiveRowPayload {
  lvl: number;
  currentActiveRow: string;
}

interface IResetRowsPayload {
  lvl: number;
  isRowAlreadyOpen: boolean;
}

interface ICurrentClickedRowsPayload {
  breadcrumbValue: string;
  lvl: number;
}

export type TableControllerActionsType =
  | { type: 'SET_CURRENT_ACTIVE_ROW'; payload: ICurrentActiveRowPayload }
  | {
      type: 'SET_RESET_ACTIVE_AND_CURRENT_CLICKED_ROWS';
      payload: IResetRowsPayload;
    }
  | { type: 'SET_CURRENT_CLICKED_ROWS'; payload: ICurrentClickedRowsPayload };

export interface IQueryResponse {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    industryIdentifiers: [
      {
        identifier: string;
      },
    ];
    categories: string[];
    language: string;
  };
}

export interface IHandleRowSelect {
  lvl: number;
  currentActiveRow: string;
  breadcrumbValue: string;
}
