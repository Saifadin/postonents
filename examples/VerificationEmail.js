import React from 'react';

// These are the imports for storybook to work. The components would be imported like this:
// import { Email, Container, Row, Column, Header, FullWidth, Footer, Text, Link, PostonentsProvider } from 'postonents';
import { Email } from '../compiled/Template';
import { Container } from '../compiled/Container';
import { Row } from '../compiled/Row';
import { Column } from '../compiled/Column';
import { Header } from '../compiled/Header';
import { FullWidth } from '../compiled/FullWidth';
import { Footer } from '../compiled/Footer';
import { Text } from '../compiled/Text';
import { Link } from '../compiled/Link';
import { PostonentsProvider } from '../compiled/ThemeContext';

// Data here represents the Example Data we might get passed to from the backend.
// This can be anything and you need to define it beforehand
const VerificationEmail = ({ data }) => {
  const { verifyToken, email } = data;
  return (
    <PostonentsProvider theme={{ typo: { fontFamily: 'Roboto, sans-serif' } }}>
      <Email
        title={`Verification email for ${email}`}
        headLinks={[
          {
            type: 'link',
            props: {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700',
            },
          },
        ]}>
        <Header logo="https://assets.airbnb.com/press/logos/NBC%20Logo.gif" logoHeight={50} style={{ marginBottom: 24 }} />
        <Container alignment="center">
          <Row>
            <Column small={12}>
              <Text>Hello,</Text>
            </Column>
            <Column small={12} style={{ marginBottom: 24 }}>
              <Text>
                You just registered with the following email: {email}. To verify this email please click on the link or the text link below.
              </Text>
            </Column>
            <Column small={12} style={{ marginBottom: 24, textAlign: 'center' }}>
              <Link href={`https://example.com/verify/${verifyToken}`} type="primary">
                Verify your email
              </Link>
            </Column>
            <Column small={12} style={{ marginBottom: 24, textAlign: 'center' }}>
              <Link href={`https://example.com/verify/${verifyToken}`}>{`https://example.com/verify/${verifyToken}`}</Link>
            </Column>
          </Row>
        </Container>
        <FullWidth style={{ marginBottom: 24 }}>
          <Container alignment="center">
            <Row>
              <Column small={12}>
                <Text>Any other questions? We are happy to help!</Text>
              </Column>
              <Column small={6}>
                <Link href="https://support.example.com" fullWidth type="hollow">
                  Help Center
                </Link>
              </Column>
              <Column small={6}>
                <Link href="mailto:info@example.com" fullWidth type="hollow">
                  Email
                </Link>
              </Column>
            </Row>
          </Container>
        </FullWidth>
        <Footer style={{ color: 'white' }}>
          <Container alignment="center">
            <Row>
              <Column style={{ textAlign: 'center', fontSize: 12, lineHeight: '16px', fontWeight: 300 }}>
                Copyright © 2018 NBC, all rights reserved
                <br />
                registered in the commercial register Narnia
              </Column>
            </Row>
          </Container>
        </Footer>
      </Email>
    </PostonentsProvider>
  );
};

export default VerificationEmail;
