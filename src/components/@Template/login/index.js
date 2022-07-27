import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import useGoogleLogin from '@hooks/oauth2/useGoogleLogin';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { LoginContainer } from './style';

const LoginPage = () => {
  const { artistList } = useSelector(state => state.artist);
  const [_, onRequestToken] = useGoogleLogin();

  return (
    <>
      <LoginContainer>
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
            <button onClick={onRequestToken}></button>
          </Form>
        </div>
        <div className="login-describe-container">
          <img src="https://pbs.twimg.com/media/FLMwx1kVkAI4JHj.jpg:large" alt="random artist" />
          <Row align="center" className="artist-description">
            <Text text="Viviz - BOP BOP!" />
          </Row>
        </div>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
