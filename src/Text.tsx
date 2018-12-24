import React, { useContext } from 'react';

import { DefaultProps, PostonentsTheme } from './types';
import { PostonentsContext } from './ThemeContext';

export interface TextProps extends DefaultProps {}

export const Text: React.SFC<TextProps> = ({ style, className, children }) => {
  const {
    colors: { text },
    typo: { fontSize: themeSize, lineHeight: themeLineHeight },
  } = useContext<PostonentsTheme>(PostonentsContext);

  return (
    <span
      className={className}
      style={{
        color: text,
        fontSize: themeSize,
        lineHeight: themeLineHeight,
        ...style,
      }}>
      {children}
    </span>
  );
};
