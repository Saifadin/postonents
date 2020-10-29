import React from 'react';

import { DefaultProps } from './types';
import { Container } from './Container';
import { Row } from './Row';
import { Column } from './Column';

export interface FullWidthProps extends DefaultProps {}

export const FullWidth: React.FC<FullWidthProps> = ({ style, className, children }) => {
  return (
    <Container alignment="center" maxWidth="100%" className={className} style={style}>
      <Row>
        <Column noPadding={true} small={12}>
          {children}
        </Column>
      </Row>
    </Container>
  );
};
