import { ITableConfig } from 'types';

const columnNames = ['isbn', 'publishedDate'];
export const singleBookConfig: ITableConfig = {
  columns: columnNames.map(column => ({ columnName: column })),
};
