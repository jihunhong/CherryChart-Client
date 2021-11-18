import Content from '@atoms/Content';
import { SIDEBAR_WIDTH } from '@config';
import { Layout } from 'antd';
import Header from '../Header';
import PopOverMenus from '../PopOverMenus';
import SearchBar from '../SearchBar';
import Sidebar from '../Sidebar';
import { GlobalStyle } from './style';

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Sidebar />
        <Layout style={{ marginLeft: SIDEBAR_WIDTH }}>
          <Header>
            <SearchBar />
            <PopOverMenus />
          </Header>
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
