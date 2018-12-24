import React from 'react';

import { DefaultProps } from './types';
import { Container } from './Container';
import { Row } from './Row';
import { Column } from './Column';
import { Image } from './Image';

export interface HeaderProps extends DefaultProps {
  logo?: string;
  title?: React.ReactNode;
}

export const Header: React.SFC<HeaderProps> = ({ logo, title, style, className, children }) => {
  return (
    <Container alignment="center" maxWidth="100%" className={className} style={style}>
      <Row>
        {logo ? (
          <Column small={12} style={{ textAlign: 'center' }}>
            <Image src={logo} height={32} />
          </Column>
        ) : null}
        {title ? (
          <Column small={12} style={{ textAlign: 'center' }}>
            {title}
          </Column>
        ) : null}
        {children ? <Column small={12}>{children}</Column> : null}
      </Row>
    </Container>
  );
};
