import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

import VerificationEmail from '../examples/VerificationEmail';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Email')} />);

storiesOf('Email', module).add('Verification Email', () => (
  <VerificationEmail data={{ email: 'osamah@example.com', verifyToken: 'testToken1234' }} />
));
