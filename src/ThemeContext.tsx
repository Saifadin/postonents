import React from 'react';
import { PostonentsTheme, DefaultProps } from './types';

const DefaultTheme = {
  colors: {
    text: '#4c5b5c',
    bodyBg: '#fafafa',
    footerBg: '#4c5b5c',
    primary: 'white',
    primaryBg: '#6699cc',
    hollow: '#4c5b5c',
  },
  typo: {
    fontFamily: 'Helvetica, sans-serif',
    fontSize: '14px',
    lineHeight: '24px',
    light: 300,
    normal: 400,
    bold: 600,
  },
};

export const PostonentsContext = React.createContext<PostonentsTheme>(DefaultTheme);
export const { Provider, Consumer: PostonentsConsumer } = PostonentsContext;

interface ProviderType extends DefaultProps {
  theme: PostonentsTheme;
}

export const PostonentsProvider: React.SFC<ProviderType> = ({ theme, children }) => {
  const value = {
    colors: {
      ...DefaultTheme.colors,
      ...theme.colors,
    },
    typo: {
      ...DefaultTheme.typo,
      ...theme.typo,
    },
  };
  return <Provider value={value}>{children}</Provider>;
};
