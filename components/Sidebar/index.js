import { SidebarWrapper } from './style';
import ProfileNav from '../ProfileNav';

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <ProfileNav />
            {/* <Navigation /> */}
            <Navigation />
            {/* <MyPageNavigation /> */}
        </SidebarWrapper>
    )
}

export default Sidebar