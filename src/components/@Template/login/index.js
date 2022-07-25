import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import { LoginContainer } from './style';
import { useSelector } from 'react-redux';

const LoginPage = () => {

  const { artistList } = useSelector(state => state.artist);

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
          <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
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
