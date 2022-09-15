import Input from '@atoms/Input';
import ProfileCircle from '@atoms/ProfileCircle';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { ACCOUNT_ARTIST_IMAGE } from '@config/settings';
import useSignUp from '@hooks/form/useSignUp';
import useValidation from '@hooks/form/useValidation';
import { Button, Divider, Row } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SignUpContainer } from './style';

const SignUpPage = () => {
  const artistList = useSelector(state => state.artist.artistList);
  const signup_loading = useSelector(state => state.user.signup_loading);
  const [random] = useState(Math.floor(Math.random() * 10) % ACCOUNT_ARTIST_IMAGE.length);
  const { form, onChange } = useValidation();
  const { onSubmit } = useSignUp(form);
  return (
    <SignUpContainer imageName={ACCOUNT_ARTIST_IMAGE[random]}>
      <div className="action-container">
        <Title level={3} text="Hello, Friend!" />
        <Text type="secondary" text="Enter your details and start journey with us" level={3} />
        <form method="post" onChange={onChange} onSubmit={onSubmit}>
          <section className="login-container">
            <Input
              placeholder="Email"
              name="email"
              required
              className={form?.email?.valid ? 'valid' : 'invalid'}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              className={form?.password?.valid ? 'valid' : 'invalid'}
            />

            <Input
              type="password"
              name="_password"
              placeholder="Confirm Password"
              required
              className={form?._password?.valid ? 'valid' : 'invalid'}
            />

            <Input
              placeholder="Nickname"
              name="nickname"
              required
              className={form?.nickname?.valid ? 'valid' : 'invalid'}
            />
          </section>
          <Button htmlType="submit" type="primary" loading={signup_loading}>
            SIGN UP
          </Button>
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
        </Row>
      </div>
    </SignUpContainer>
  );
};

export default SignUpPage;
