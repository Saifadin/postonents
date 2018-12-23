import React from 'react';

import { Column } from './Column';
import { DefaultProps } from './types';

export interface RowProps extends DefaultProps {}

export const Row: React.SFC<RowProps> = ({ children, className, style }) => {
  return (
    <tr className={className} style={{ padding: 0, width: '100%', position: 'relative', ...style }}>
      {React.Children.map(children, (child: any) => {
        if (child.type === Column) return child;

        return <td>{child}</td>;
      })}
    </tr>
  );
};
