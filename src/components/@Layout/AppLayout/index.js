import Main from '@Layout/Main';
import Footer from '@Layout/Footer';
import Header from '@Layout/Header';
import SiteNav from '@Layout/ProfileNav';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import Sidebar from '../Sidebar';
import { GlobalStyle } from './style';

const PopOverMenus = dynamic(() => import('@Layout/PopOverMenus'), { ssr: false });

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header>
          <SiteNav />
          <PopOverMenus />
        </Header>
        <Layout className="app-content">
          <Sidebar />
          <Main>
            <>{children}</>
          </Main>
        </Layout>
        <Footer />
      </Layout>
    </>
  );
};

export default AppLayout;
