import React from 'react';

import { DefaultProps, PostonentsTheme } from './types';
import { PostonentsConsumer } from './ThemeContext';

export interface TextProps extends DefaultProps {}

export const Text: React.FC<TextProps> = ({ style, className, children }) => {
  return (
    <PostonentsConsumer>
      {({ colors: { text }, typo: { fontSize: themeSize, lineHeight: themeLineHeight } }: PostonentsTheme) => {
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
      }}
    </PostonentsConsumer>
  );
};
