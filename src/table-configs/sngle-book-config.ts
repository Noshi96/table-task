import { TableConfigModel } from 'models';

const columnNames = ['isbn'];
export const singleBookConfig: TableConfigModel = {
  columns: columnNames.map(column => ({ columnName: column })),
};
