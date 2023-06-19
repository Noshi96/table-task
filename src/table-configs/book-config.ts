import { ITableConfig } from 'types';

const columnNames = ['id', 'authors', 'title', 'categories'];
export const bookConfig: ITableConfig = {
  columns: columnNames.map(column => ({ columnName: column })),
};
