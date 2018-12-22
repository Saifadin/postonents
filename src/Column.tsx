import React from 'react';

import { DefaultProps } from './types';
import { useMedia } from './useMedia';

export interface ColumnProps extends DefaultProps {
  small: number;
  large: number;
}

export const Column: React.SFC<ColumnProps> = ({ children, className, style, small = 12, large = 12 }) => {
  const isSmall = useMedia({ maxWidth: 599 });

  const getSize = () => {
    const columnCount = isSmall ? small : large;
    return `${(columnCount / 12) * 100}%`;
  };

  return (
    <td className={className} style={{ position: 'relative', width: getSize(), ...style }}>
      {children}
    </td>
  );
};
