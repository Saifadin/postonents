import React from 'react';

import { DefaultProps } from './types';
import { Container } from './Container';
import { Row } from './Row';
import { Column } from './Column';

export interface FooterProps extends DefaultProps {
  logo?: string;
}

export const Footer: React.SFC<FooterProps> = ({ logo, style, className, children }) => {
  return (
    <Container alignment="center" maxWidth="100%" className={className} style={style}>
      <Row>
        <Column small={12}>
          {children || null}
          {logo ? (
            <Container alignment="center">
              <Row>
                <Column small={12}>{logo}</Column>
              </Row>
            </Container>
          ) : null}
        </Column>
      </Row>
    </Container>
  );
};
