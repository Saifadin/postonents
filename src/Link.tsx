import React, { useContext } from 'react';

import { DefaultProps, PostonentsTheme } from './types';
import { PostonentsContext } from './ThemeContext';

enum LinkStylesEnum {
  Link = 'link',
  PrimaryButton = 'primary',
  HollowButton = 'hollow',
}

export interface LinkProps extends DefaultProps {
  fontWeight?: number;
  fullWidth?: boolean;
  href: string;
  type?: LinkStylesEnum;
}

export const Link: React.SFC<LinkProps> = ({ style, children, fontWeight, fullWidth, className, type }) => {
  const {
    colors: { text, primary, primaryBg, hollow },
    typo: { fontSize, lineHeight },
  } = useContext<PostonentsTheme>(PostonentsContext);

  let linkStyles = {
    display: 'inline-block',
    color: type === LinkStylesEnum.PrimaryButton ? primary : text,
    backgroundColor: type === LinkStylesEnum.PrimaryButton ? primaryBg : 'transparent',
    textDecoration: 'none',
    borderRadius: 2,
    fontSize,
    lineHeight,
    fontWeight,
    width: fullWidth ? '100%' : undefined,
    padding:
      type === LinkStylesEnum.PrimaryButton || type === LinkStylesEnum.HollowButton
        ? `${type === LinkStylesEnum.HollowButton ? 7 : 8}px 16px`
        : undefined,
    height: type === LinkStylesEnum.PrimaryButton || type === LinkStylesEnum.HollowButton ? 40 : undefined,
    border: type === LinkStylesEnum.HollowButton ? `1px solid ${hollow}` : undefined,
  };

  return (
    <a className={className} style={{ textAlign: 'center', ...linkStyles, ...style }}>
      {children}
    </a>
  );
};
