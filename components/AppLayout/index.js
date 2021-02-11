import { Layout } from 'antd';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const AppLayout = ({ children }) => {
    return (
        <>
            <Layout>
                <Sidebar />
                <Layout className>
                    <Header>Header</Header>
                    <Content>{ children }</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default AppLayout;