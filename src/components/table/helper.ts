import {ReactNode} from 'react';

export const getComponent = (key: string, children: any) => children.filter((child: any) => child.key === key)