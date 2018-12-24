import React from 'react';

import { Column } from './Column';
import { DefaultProps } from './types';

export interface RowProps extends DefaultProps {}

export const Row: React.SFC<RowProps> = ({ children, className, style }) => {
  return (
    <table className={className} style={{ padding: 0, width: '100%', position: 'relative', ...style }}>
      <tbody>
        <tr>
          {React.Children.map(children, (child: any) => {
            if (!child) return;
            if (child.type === Column) return child;

            return <td>{child}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
};
