import React from 'react';

import { DefaultProps } from './types';

export interface ContainerProps extends DefaultProps {
  alignment: string;
  maxWidth: number;
}

export const Container: React.SFC<ContainerProps> = ({ children, alignment, maxWidth, style, className }) => {
  return (
    <table className={className} style={{ margin: alignment === 'center' ? '0 auto' : '0', maxWidth, width: '100%', ...style }}>
      <tbody>
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
  );
};
