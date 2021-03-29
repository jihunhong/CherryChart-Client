import { Layout } from 'antd';
import { SIDEBAR_WIDTH } from '@config';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import PopOverMenus from '../PopOverMenus';

const AppLayout = ({ children }) => {
  return (
    <>
      <Layout>
        <Sidebar />
        <Layout style={{ marginLeft: SIDEBAR_WIDTH }}>
          <Header>
            <SearchBar />
            <PopOverMenus />
          </Header>
          <Content>{children}</Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
