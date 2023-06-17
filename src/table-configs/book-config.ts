import { TableConfigModel } from 'models';

const columnNames = ['printType', 'language', 'pageCount'];
export const bookConfig: TableConfigModel = {
  columns: columnNames.map(column => ({ columnName: column })),
};
