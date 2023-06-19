import { ITableConfig } from 'types';

const columnNames = ['id', 'authors', 'language'];
export const authorConfig: ITableConfig = {
  columns: columnNames.map(column => ({ columnName: column })),
};
