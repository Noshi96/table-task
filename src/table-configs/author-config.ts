import { TableConfigModel } from 'models';

const columnNames = ['id', 'authors', 'language'];
export const authorConfig: TableConfigModel = {
  columns: columnNames.map(column => ({ columnName: column })),
};
