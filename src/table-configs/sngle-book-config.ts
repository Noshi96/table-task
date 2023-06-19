import { ITableConfig } from 'types';

const columnNames = ['isbn'];
export const singleBookConfig: ITableConfig = {
  columns: columnNames.map(column => ({ columnName: column })),
};
