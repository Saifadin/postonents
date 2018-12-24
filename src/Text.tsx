import React from 'react';

import { DefaultProps } from './types';

export interface TextProps extends DefaultProps {
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: number;
}

export const Text: React.SFC<TextProps> = ({ style, className, children, fontSize, lineHeight, fontWeight }) => {
  return (
    <span className={className} style={{ fontSize, lineHeight: `${lineHeight}px`, fontWeight, ...style }}>
      {children}
    </span>
  );
};
