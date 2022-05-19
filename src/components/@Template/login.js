import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { Button, Checkbox, Form, Input } from 'antd';
import { LoginContainer } from './style';

const LoginPage = () => {
  return (
    <LoginContainer>
      <div className="action-container">
        <Title level={3} text={'Welcome back'} />
        <Text type="secondary" text={'Play your music'} level={3} />
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
        </Form>
      </div>
      <div className="background" />
    </LoginContainer>
  );
};

export default LoginPage;
