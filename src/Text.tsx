import React, { useContext } from 'react';

import { DefaultProps, PostonentsTheme } from './types';
import { PostonentsContext } from './ThemeContext';

export interface TextProps extends DefaultProps {
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: number;
}

export const Text: React.SFC<TextProps> = ({ style, className, children, fontSize, lineHeight, fontWeight }) => {
  const {
    colors: { text },
    typo: { fontSize: themeSize, lineHeight: themeLineHeight },
  } = useContext<PostonentsTheme>(PostonentsContext);

  return (
    <span
      className={className}
      style={{
        color: text,
        fontSize: fontSize || themeSize,
        lineHeight: lineHeight ? `${lineHeight}px` : themeLineHeight,
        fontWeight,
        ...style,
      }}>
      {children}
    </span>
  );
};
