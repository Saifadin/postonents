import React from 'react';

import { DefaultProps } from './types';

export interface ImageProps extends DefaultProps {
  height?: number;
  width?: number;
  src: string;
}

export const Image: React.SFC<ImageProps> = ({ style, className, children, height, width, src }) => {
  return (
    <img src={src} className={className} height={height} width={width} style={{ ...style }}>
      {children}
    </img>
  );
};
