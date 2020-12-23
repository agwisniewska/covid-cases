import {PaginationProps} from '../../../components';
import {UseTableInstanceProps} from 'react-table';

export type TableProps = Pick<UseTableInstanceProps<{}>, 
'headerGroups' |
'prepareRow' |
'footerGroups' |
'getTableProps' |
'getTableBodyProps'
> & PaginationProps