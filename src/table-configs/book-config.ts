import { TableConfigModel } from 'models';

const columnNames = ['id', 'authors', 'title', 'categories'];
export const bookConfig: TableConfigModel = {
  columns: columnNames.map(column => ({ columnName: column })),
};
