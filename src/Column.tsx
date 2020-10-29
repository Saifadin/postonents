import React from 'react';

import { DefaultProps } from './types';

export interface ColumnProps extends DefaultProps {
  small?: number;
  large?: number;
  noPadding?: boolean;
}

export const Column: React.FC<ColumnProps> = ({ children, className, style, small = 12, large, noPadding }) => {
  return (
    <td
      className={`small-${small} large-${large || small} ${className || ''}`}
      style={{
        padding: noPadding ? 0 : 8,
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        WebkitBoxSizing: 'border-box',
        height: 'auto !important',
        ...style,
      }}>
      {children}
    </td>
  );
};
