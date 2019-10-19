import React, { CSSProperties } from 'react';
import uniqId from 'uniqid';

import { DefaultProps, PostonentsTheme } from './types';
import { PostonentsConsumer } from './ThemeContext';

export interface EmailProps extends DefaultProps {
  lang: string;
  title: string;
  headLinks?: Array<{
    type: string;
    children?: React.ReactNode;
    props?: object;
  }>;
  headStyles?: string;
  bodyStyle?: CSSProperties;
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
                {`
                * {
                  box-sizing: border-box;
                }
                table { border-collapse:separate; }
                a, a:link, a:visited { text-decoration: none; color: #00788a; }
                a:hover { text-decoration: underline; }
                h2,h2 a,h2 a:visited,h3,h3 a,h3 a:visited,h4,h5,h6,.t_cht { color:#000 !important; }
                .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td { line-height: 100%; }
                .ExternalClass { width: 100%; }
                td.small-1 { display:inline-block!important; width: calc(1 / 12 * 100%) !important; }
                td.small-2 { display:inline-block!important; width: calc(2 / 12 * 100%) !important; }
                td.small-3 { display:inline-block!important; width: calc(3 / 12 * 100%) !important; }
                td.small-4 { display:inline-block!important; width: calc(4 / 12 * 100%) !important; }
                td.small-5 { display:inline-block!important; width: calc(5 / 12 * 100%) !important; }
                td.small-6 { display:inline-block!important; width: calc(6 / 12 * 100%) !important; }
                td.small-7 { display:inline-block!important; width: calc(7 / 12 * 100%) !important; }
                td.small-8 { display:inline-block!important; width: calc(8 / 12 * 100%) !important; }
                td.small-9 { display:inline-block!important; width: calc(9 / 12 * 100%) !important; }
                td.small-10 { display:inline-block!important; width: calc(10 / 12 * 100%) !important; }
                td.small-11 { display:inline-block!important; width: calc(11 / 12 * 100%) !important; }
                td.small-12 { display:inline-block!important; width: calc(12 / 12 * 100%) !important; }

                @media (min-width: 600px) {
                  td.large-1 { display:inline-block!important; width: calc(1 / 12 * 100%) !important; }
                  td.large-2 { display:inline-block!important; width: calc(2 / 12 * 100%) !important; }
                  td.large-3 { display:inline-block!important; width: calc(3 / 12 * 100%) !important; }
                  td.large-4 { display:inline-block!important; width: calc(4 / 12 * 100%) !important; }
                  td.large-5 { display:inline-block!important; width: calc(5 / 12 * 100%) !important; }
                  td.large-6 { display:inline-block!important; width: calc(6 / 12 * 100%) !important; }
                  td.large-7 { display:inline-block!important; width: calc(7 / 12 * 100%) !important; }
                  td.large-8 { display:inline-block!important; width: calc(8 / 12 * 100%) !important; }
                  td.large-9 { display:inline-block!important; width: calc(9 / 12 * 100%) !important; }
                  td.large-10 { display:inline-block!important; width: calc(10 / 12 * 100%) !important; }
                  td.large-11 { display:inline-block!important; width: calc(11 / 12 * 100%) !important; }
                  td.large-12 { display:inline-block!important; width: calc(12 / 12 * 100%) !important; }
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
                textSizeAdjust: '100%',
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
