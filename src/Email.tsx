import React from 'react';

import { DefaultProps } from './types';

export interface EmailProps extends DefaultProps {
  lang: string;
  title: string;
  bgcolor: string;
  headLinks: string;
  headStyles: string;
  bodyStyle: object;
}

// inspired by http://htmlemailboilerplate.com
export const Email: React.SFC<EmailProps> = ({ lang, title, headStyles, bodyStyle, headLinks = '', children }) => {
  // default nested 600px wide outer table container (see http://templates.mailchimp.com/development/html/)
  return (
    <html lang={lang}>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {headLinks}
        {headStyles ? <style type="text/css">{headStyles}</style> : null}
      </head>
      <body
        style={{
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          WebkitTextSizeAdjust: '100%',
          MsTextSizeAdjust: '100%',
          ...bodyStyle,
        }}>
        {children}
      </body>
    </html>
  );
};
