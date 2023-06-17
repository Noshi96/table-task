import { TableConfigModel } from 'models';

const columnNames = ['id', 'authors', 'title', 'categories', 'publishedDate'];
export const authorConfig: TableConfigModel = {
  columns: columnNames.map(column => ({ columnName: column })),
};
