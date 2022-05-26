import Content from '@atoms/Content';
import { SIDEBAR_WIDTH } from '@config';
import { Layout } from 'antd';
import Sidebar from '../Sidebar';
import { GlobalStyle } from './style';

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Sidebar />
        <Layout style={{ marginLeft: SIDEBAR_WIDTH }}>
          {/* <Header>
            <PopOverMenus />
          </Header> */}
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
