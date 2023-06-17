export interface ColumnModel {
  columnName: string;
}

export interface TableConfigModel {
  columns: ColumnModel[];
}

export interface RowData {
  [key: string]: React.ReactNode;
}
