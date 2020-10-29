import React from 'react';

import { DefaultProps, PostonentsTheme } from './types';
import { PostonentsConsumer } from './ThemeContext';

enum LinkStylesEnum {
  Link = 'link',
  PrimaryButton = 'primary',
  HollowButton = 'hollow',
}

export interface LinkProps extends DefaultProps {
  fullWidth?: boolean;
  href: string;
  type?: 'link' | 'primary' | 'hollow' | LinkStylesEnum;
}

export const Link: React.FC<LinkProps> = ({ href, style, children, fullWidth, className, type }) => {
  return (
    <PostonentsConsumer>
      {({ colors: { text, primary, primaryBg, hollow }, typo: { fontSize, lineHeight } }: PostonentsTheme) => {
        let linkStyles = {
          display: 'inline-block',
          color: type === 'primary' ? primary : text,
          backgroundColor: type === 'primary' ? primaryBg : 'transparent',
          textDecoration: 'none',
          borderRadius: 2,
          fontSize,
          lineHeight,
          width: fullWidth ? '100%' : undefined,
          padding: type === 'primary' || type === 'hollow' ? `${type === 'hollow' ? 7 : 8}px 16px` : undefined,
          height: type === 'primary' || type === 'hollow' ? 40 : undefined,
          border: type === 'hollow' ? `1px solid ${hollow}` : undefined,
        };

        return (
          <a href={href} className={className} style={{ textAlign: 'center', ...linkStyles, ...style }}>
            {children}
          </a>
        );
      }}
    </PostonentsConsumer>
  );
};
