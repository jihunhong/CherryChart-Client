import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import { SignUpContainer } from './style';

const SignUpPage = () => {
  return (
    <SignUpContainer>
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
            <Form.Item rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password placeholder="Nickname" />
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
      <div className="login-describe-container">
        <img src="https://w.namu.la/s/35f771d4c99fead552a2b33da26a0a53aace0f23a2df055ce72789521d5e2c955f6639d688d6ca538f455f7a0cd1dbe66e3129372fd43b091c79541201a27e39eb541eba4bd37702b3e38339442cfb8f051f4def9a0ac9db566957636de26d70" alt="random artist" />
        {/* TODO :: artist random image */}
        <Row align="center" className="artist-description">
          <Text text="Viviz - BOP BOP!" />
        </Row>
      </div>
    </SignUpContainer>
  );
};

export default SignUpPage;
