import React from 'react';

import { DefaultProps } from './types';

export interface RowProps extends DefaultProps {}

export const Row: React.FC<RowProps> = ({ children, className, style }) => {
  return (
    <table className={className} width="100%" style={{ padding: 0, ...style }}>
      <tbody>
        <tr>
          {React.Children.map(children, (child: any) => {
            if (!child) {
              return;
            }

            return child;
          })}
        </tr>
      </tbody>
    </table>
  );
};
