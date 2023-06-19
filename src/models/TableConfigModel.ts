export interface ColumnModel {
  columnName: string;
}

export interface TableConfigModel {
  columns: ColumnModel[];
}

export interface RowData {
  [key: string]: React.ReactNode;
}

export interface IStateInSingleLvl {
  lvl: number;
  tableConfig: TableConfigModel;
  useGetDataForRows: Function;
  getDataParam: string;
  visitedNestedTable: boolean;
  currentActiveRow: string;
  breadcrumbKey: string;
  breadcrumbValue: string;
}

export interface ITableControllerState {
  levels: IStateInSingleLvl[];
  currentClickedRows: string[];
  currentLevel: number;
}

export interface ITableControllerDispatch {
  type: string;
  payload?: any;
}
