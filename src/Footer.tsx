import React from 'react';

import { DefaultProps, PostonentsTheme } from './types';
import { PostonentsConsumer } from './ThemeContext';
import { Container } from './Container';
import { Row } from './Row';
import { Column } from './Column';

export interface FooterProps extends DefaultProps {}

export const Footer: React.FC<FooterProps> = ({ style, className, children }) => {
  return (
    <PostonentsConsumer>
      {({ colors: { footerBg, footerText } }: PostonentsTheme) => {
        return (
          <Container
            alignment="center"
            maxWidth="100%"
            className={className}
            style={{ backgroundColor: footerBg, color: footerText, ...style }}>
            <Row>
              <Column small={12}>{children || null}</Column>
            </Row>
          </Container>
        );
      }}
    </PostonentsConsumer>
  );
};
