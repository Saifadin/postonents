import React from 'react';

import { Row } from './Row';
import { Column } from './Column';
import { DefaultProps } from './types';

export interface ContainerProps extends DefaultProps {
  alignment: string;
  maxWidth: number;
}

export const Container: React.SFC<ContainerProps> = ({ children, alignment, maxWidth, style, className }) => {
  return (
    <table className={className} style={{ margin: alignment === 'center' ? '0 auto' : '0', maxWidth, width: '100%', ...style }}>
      <tbody>
        {React.Children.map(children, (child: any) => {
          if (!child) return;
          if (child.type === Row) return child;
          if (child.type === Column) {
            return <tr>{child}</tr>;
          }

          return (
            <tr>
              <td>{child}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
