import { ReactNode } from 'react';
import { UseTableInstanceProps } from 'react-table';

export type TableProps = Pick<UseTableInstanceProps<{}>,
'getTableProps'
>;