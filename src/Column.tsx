import React from 'react';

import { DefaultProps } from './types';

export interface ColumnProps extends DefaultProps {
  small?: number;
  large?: number;
  noPadding?: boolean;
}

export const Column: React.SFC<ColumnProps> = ({ children, className, style, small = 12, large, noPadding }) => {
  return (
    <td
      className={`small-${small} large-${large || small} ${className || ''}`}
      style={{ position: 'relative', display: 'inline-block', padding: noPadding ? 0 : 8, ...style }}>
      {children}
    </td>
  );
};
