// import React from 'react';

export interface DefaultProps {
  style?: object;
  className?: string;
  children?: React.ReactNode;
}

export interface PostonentsColors {
  text?: string;
  bodyBg?: string;
  footerBg?: string;
  primary?: string;
  primaryBg?: string;
  hollow?: string;
}

export interface PostonentsTypography {
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
  light?: number;
  normal?: number;
  bold?: number;
}

export type PostonentsTheme = {
  colors: PostonentsColors;
  typo: PostonentsTypography;
};
