import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const renderEmail = (Template: React.FunctionComponent, emailData?: object, headStyles?: string): string => {
  const docType = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
  const props: any = { headStyles, ...emailData };
  const templateElement = React.createElement(Template, { ...props });
  const content = ReactDOMServer.renderToStaticMarkup(templateElement);

  return `${docType}${content}`;
};

export const renderHtml = renderEmail;
