import Content from '@atoms/Content';
import { SIDEBAR_WIDTH } from '@config/index';
import Header from '@Layout/Header';
import PopOverMenus from '@Layout/PopOverMenus';
import ProfileNav from '@Layout/ProfileNav';
import { Layout } from 'antd';
import Sidebar from '../Sidebar';
import { GlobalStyle } from './style';

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header>
          <ProfileNav />
          <PopOverMenus />
        </Header>
        <Layout className="app-content">
          <Sidebar />
          <Content>
            <>{children}</>
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
