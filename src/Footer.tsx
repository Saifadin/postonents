import React, { useContext } from 'react';

import { DefaultProps, PostonentsTheme } from './types';
import { PostonentsContext } from './ThemeContext';
import { Container } from './Container';
import { Row } from './Row';
import { Column } from './Column';

export interface FooterProps extends DefaultProps {}

export const Footer: React.SFC<FooterProps> = ({ style, className, children }) => {
  const {
    colors: { footerBg },
  } = useContext<PostonentsTheme>(PostonentsContext);

  return (
    <Container alignment="center" maxWidth="100%" className={className} style={{ backgroundColor: footerBg, ...style }}>
      <Row>
        <Column small={12}>{children || null}</Column>
      </Row>
    </Container>
  );
};
