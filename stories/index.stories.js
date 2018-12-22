import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

import { Container } from '../compiled/Container';
import { Header } from '../compiled/Header';
import { Row } from '../compiled/Row';
import { Column } from '../compiled/Column';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Grid', module).add('Example Grid', () => (
  <Container alignment="center" maxWidth={600}>
    <Row>
      <Column large={8}>Hello</Column>
      <Column large={4}>Hello</Column>
    </Row>
  </Container>
));
