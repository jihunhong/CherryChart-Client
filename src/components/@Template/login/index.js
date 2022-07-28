import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { ACCOUNT_ARTIST_IMAGE } from '@config/settings';
import useGoogleLogin from '@hooks/oauth2/useGoogleLogin';
import { Button, Checkbox, Divider, Form, Input, Row } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import GoogleButton from 'react-google-button';
import { BiInfoCircle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { LoginContainer, LoginPageGlobalStyle } from './style';

const LoginPage = () => {
  const { artistList } = useSelector(state => state.artist);
  const [_, onRequestToken] = useGoogleLogin();
  const [random] = useState(Math.floor(Math.random() * 10) % ACCOUNT_ARTIST_IMAGE.length);

  return (
    <>
      <LoginPageGlobalStyle />
      <LoginContainer imageName={ACCOUNT_ARTIST_IMAGE[random]}>
        <div className="action-container">
          <Title level={3} text="Welcome back!" />
          <Text type="secondary" text="Check the music charts and make a playlist" level={3} />
          <Form autoComplete="off">
            <section className="login-container">
              <Form.Item rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <LinkHOC className="login-form-forgot" href="/">
                  Forgot password
                </LinkHOC>
              </Form.Item>
            </section>
            <Button type="primary">Login</Button>
            <GoogleButton style={{ width: '100%' }} type="light" onClick={onRequestToken} />
          </Form>
        </div>
        <div className="login-describe-container">
          <Row align="flex-start" className="login-describe">
            <Title text="Share your playlist via YouTube!" />
            <Text text="Browse the KPOP charts and add your favorite songs to your playlist! Take a look at the songs that are counted every day." />
            <section className="artists-profiles">
              {artistList.slice(0, 5).map(item => (
                <div className="artist-container" key={item.id}>
                  <Image src={item?.music?.middleArtistProfile} width={38} height={38} />
                </div>
              ))}
              <Text text="+ More artists are registered with us." />
            </section>
            <Divider />
            <Text text="You need to log in to Google to manage your YouTube playlists." icon={<BiInfoCircle />} />
          </Row>
        </div>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
