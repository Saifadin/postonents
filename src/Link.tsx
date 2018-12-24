import React from 'react';

import { DefaultProps } from './types';

enum LinkStylesEnum {
  Link = 'link',
  PrimaryButton = 'primary',
  HollowButton = 'hollow',
}

export interface LinkProps extends DefaultProps {
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: number;
  fullWidth?: boolean;
  href: string;
  type?: LinkStylesEnum;
}

export const Link: React.SFC<LinkProps> = ({ style, children, fontSize, lineHeight, fontWeight, fullWidth, className, type }) => {
  let linkStyles = {
    display: 'inline-block',
    color: type === LinkStylesEnum.PrimaryButton ? 'white' : '#4c5b5c',
    backgroundColor: type === LinkStylesEnum.PrimaryButton ? '#6699cc' : 'transparent',
    textDecoration: 'none',
    borderRadius: 2,
    fontSize,
    lineHeight: lineHeight ? `${lineHeight}px` : '24px',
    fontWeight,
    width: fullWidth ? '100%' : undefined,
    padding:
      type === LinkStylesEnum.PrimaryButton || type === LinkStylesEnum.HollowButton
        ? `${type === LinkStylesEnum.HollowButton ? 7 : 8}px 16px`
        : undefined,
    height: type === LinkStylesEnum.PrimaryButton || type === LinkStylesEnum.HollowButton ? 40 : undefined,
    border: type === LinkStylesEnum.HollowButton ? '1px solid #4c5b5c' : undefined,
  };

  return (
    <a className={className} style={{ textAlign: 'center', ...linkStyles, ...style }}>
      {children}
    </a>
  );
};
