import Input from '@atoms/Input';
import LinkHOC from '@atoms/LinkHOC';
import ProfileCircle from '@atoms/ProfileCircle';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { ACCOUNT_ARTIST_IMAGE } from '@config/settings';
import useGoogleLogin from '@hooks/oauth2/useGoogleLogin';
import { Button, Divider, Row } from 'antd';
import useValidation from '@hooks/form/useValidation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import GoogleButton from 'react-google-button';
import { BiInfoCircle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { LoginContainer, LoginPageGlobalStyle } from './style';
import useLogin from '@hooks/user/useLogin';

const LoginPage = () => {
  const { artistList } = useSelector(state => state.artist);
  const [_, handleGoogleLogin] = useGoogleLogin();
  const [random] = useState(Math.floor(Math.random() * 10) % ACCOUNT_ARTIST_IMAGE.length);
  const { form, onChange } = useValidation();
  const [loading, handleLogin] = useLogin(form);
  const router = useRouter();

  return (
    <>
      <LoginPageGlobalStyle />
      <LoginContainer imageName={ACCOUNT_ARTIST_IMAGE[random]}>
        <div className="action-container">
          <Title level={3} text="Welcome back!" />
          <Text type="secondary" text="Check the music charts and make a playlist" level={3} />
          <form method="post" onChange={onChange} onSubmit={handleLogin}>
            <section className="login-container">
              <Input
                placeholder="Email"
                name="email"
                required
                className={form?.email?.valid ? 'valid' : 'invalid'}
              />
              <Input type="password" name="password" placeholder="Password" required />
            </section>
            <Button type="primary" htmlType="submit" loading={loading}>
              LOGIN
            </Button>
            <Row className="sign" align="middle" justify="start">
              <span>Don't have an account?&nbsp;</span>
              Please
              <LinkHOC
                href={`/signup${
                  router.query?.redirect ? `?redirect=${router.query.redirect}` : ''
                }`}
              >
                &nbsp;Signup
              </LinkHOC>
            </Row>
            <Divider>or</Divider>
            <GoogleButton style={{ width: '100%' }} type="light" onClick={handleGoogleLogin} />
          </form>
        </div>
        <div className="login-describe-container">
          <Row align="flex-start" className="login-describe">
            <Title text="Share your playlist via YouTube!" />
            <Text text="Browse the KPOP charts and add your favorite songs to your playlist! Take a look at the songs that are counted every day." />
            <section className="artists-profiles">
              {artistList.slice(0, 5).map(item => (
                <ProfileCircle
                  key={item.id}
                  className="profile-circle-container"
                  src={item?.music?.middleArtistProfile}
                  width={38}
                  height={38}
                />
              ))}
              <Text text="+ More artists are registered with us." />
            </section>
            <Divider />
            <Text
              text="You need to log in to Google to manage your YouTube playlists."
              icon={<BiInfoCircle />}
            />
          </Row>
        </div>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
