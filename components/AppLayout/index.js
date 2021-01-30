import { Layout } from 'antd';
import Sidebar from '../Sidebar';

const AppLayout = ({ children }) => {
    return (
        <>
            <Layout>
                <Sidebar />
                <Layout>
                    <Layout.Header>Header</Layout.Header>
                    <Layout.Content>{ children }</Layout.Content>
                    <Layout.Footer>Footer</Layout.Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default AppLayout;