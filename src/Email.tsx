import React, { useContext } from 'react';
import uniqId from 'uniqid';

import { DefaultProps, PostonentsTheme } from './types';
import { PostonentsContext } from './ThemeContext';

export interface EmailProps extends DefaultProps {
  lang: string;
  title: string;
  headLinks: Array<{
    type: string;
    children?: React.ReactNode;
    props?: object;
  }>;
  headStyles: string;
  bodyStyle: object;
}

export const Email: React.SFC<EmailProps> = ({ lang, title, headStyles, bodyStyle, headLinks = [], children }) => {
  const {
    colors: { text, bodyBg },
    typo: { fontFamily, fontSize, lineHeight },
  } = useContext<PostonentsTheme>(PostonentsContext);

  return (
    <html lang={lang}>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {headLinks && headLinks.length > 0
          ? headLinks.map(({ type, children = null, props }) => {
              return React.createElement(type, { key: uniqId(), ...props }, children);
            })
          : null}
        <style type="text/css">
          {`* {
            box-sizing: border-box;
          }`}
          {headStyles}
        </style>
      </head>
      <body
        style={{
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          WebkitTextSizeAdjust: '100%',
          MsTextSizeAdjust: '100%',
          backgroundColor: bodyBg,
          color: text,
          fontSize,
          lineHeight,
          fontFamily,
          ...bodyStyle,
        }}>
        {children}
      </body>
    </html>
  );
};
