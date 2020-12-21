import {TableInstance} from 'react-table';

export const getTotalCount = (info: TableInstance, key: string): number => {
  return info.rows.reduce((sum, row) => row.values[key] + sum, 0);
}