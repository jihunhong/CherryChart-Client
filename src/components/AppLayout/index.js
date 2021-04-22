import { Layout } from 'antd';
import { SIDEBAR_WIDTH } from '@config';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import PopOverMenus from '../PopOverMenus';
import dynamic from 'next/dynamic';

const AppLayout = ({ children }) => {
  const Player = dynamic(() => import('@components/Player'));

  return (
    <>
      <Layout>
        <Sidebar />
        <Layout>
          <Header>
            <SearchBar />
            <PopOverMenus />
          </Header>
          <Content>
            <>
              {children}
              <Player />
            </>
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
