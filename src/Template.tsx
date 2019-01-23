import React from 'react';
import uniqId from 'uniqid';

import { DefaultProps, PostonentsTheme } from './types';
import { PostonentsConsumer } from './ThemeContext';

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

export const Template: React.SFC<EmailProps> = ({ lang, title, headStyles, bodyStyle, headLinks = [], children }) => {
  return (
    <PostonentsConsumer>
      {({ colors: { text, bodyBg }, typo: { fontFamily, fontSize, lineHeight } }: PostonentsTheme) => {
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
                }

                .small-1 { width: calc(1 / 12 * 100%); }
                .small-2 { width: calc(2 / 12 * 100%); }
                .small-3 { width: calc(3 / 12 * 100%); }
                .small-4 { width: calc(4 / 12 * 100%); }
                .small-5 { width: calc(5 / 12 * 100%); }
                .small-6 { width: calc(6 / 12 * 100%); }
                .small-7 { width: calc(7 / 12 * 100%); }
                .small-8 { width: calc(8 / 12 * 100%); }
                .small-9 { width: calc(9 / 12 * 100%); }
                .small-10 { width: calc(10 / 12 * 100%); }
                .small-11 { width: calc(11 / 12 * 100%); }
                .small-12 { width: calc(12 / 12 * 100%); }

                @media (min-width: 600px) {
                  .large-1 { width: calc(1 / 12 * 100%); }
                  .large-2 { width: calc(2 / 12 * 100%); }
                  .large-3 { width: calc(3 / 12 * 100%); }
                  .large-4 { width: calc(4 / 12 * 100%); }
                  .large-5 { width: calc(5 / 12 * 100%); }
                  .large-6 { width: calc(6 / 12 * 100%); }
                  .large-7 { width: calc(7 / 12 * 100%); }
                  .large-8 { width: calc(8 / 12 * 100%); }
                  .large-9 { width: calc(9 / 12 * 100%); }
                  .large-10 { width: calc(10 / 12 * 100%); }
                  .large-11 { width: calc(11 / 12 * 100%); }
                  .large-12 { width: calc(12 / 12 * 100%); }
                }

                `}
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
      }}
    </PostonentsConsumer>
  );
};

export const Email = Template;
