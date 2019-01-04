import React from 'react';
import Media from 'react-media';

import { DefaultProps } from './types';

export interface ColumnProps extends DefaultProps {
  small?: number;
  large?: number;
  noPadding?: boolean;
}

export const Column: React.SFC<ColumnProps> = ({ children, className, style, small = 12, large, noPadding }) => {
  return (
    <Media query={{ maxWidth: 599 }}>
      {isSmall => {
        const getSize = () => {
          const columnCount = isSmall ? small : large || small;
          return `${(columnCount / 12) * 100}%`;
        };

        return (
          <td
            className={className}
            style={{ position: 'relative', width: getSize(), display: 'inline-block', padding: noPadding ? 0 : 8, ...style }}>
            {children}
          </td>
        );
      }}
    </Media>
  );
};
