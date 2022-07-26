import { postGoogleOauth } from '@actions/userActions';
import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { CLIENT_ID } from '@config/settings';
import useScript from '@hooks/util/useScript';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import axios from 'axios';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginContainer } from './style';

axios.defaults.withCredentials = true;

const LoginPage = () => {
  const { artistList } = useSelector(state => state.artist);
  const GoogleBtn = useRef(null);
  const dispatch = useDispatch();
  useScript('https://accounts.google.com/gsi/client', () => {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/userinfo.profile \
      https://www.googleapis.com/auth/userinfo.email \
      https://www.googleapis.com/auth/youtube.readonly \
      https://www.googleapis.com/auth/youtube.force-ssl \
      https://www.googleapis.com/auth/youtubepartner',
      callback: async(res) => {
        console.log(res);
        dispatch(postGoogleOauth({
          accessToken: res.access_token
        }))
       }
    });
    client.requestAccessToken();
  });

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
<div id="g_id_onload"
         data-client_id={CLIENT_ID}>
      </div>
      <div class="g_id_signin"
         data-type="standard"
         data-size="large"
         data-theme="outline"
         data-text="sign_in_with"
         data-shape="rectangular"
         data-logo_alignment="left">
      </div>
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
