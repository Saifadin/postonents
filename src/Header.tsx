import React from 'react';

import { DefaultProps } from './types';

export interface HeaderProps extends DefaultProps {}

export const Header: React.SFC<HeaderProps> = ({ className, style }) => {
  return (
    <table className={className} style={{ ...style }}>
      <tbody>
        <tr>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
      </tbody>
    </table>
  );
};
