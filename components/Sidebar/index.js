import { SidebarWrapper } from './style';
import ProfileNav from '../ProfileNav';
import Navigation from '../Navigation';
import MyMusic from '../MyMusic';

const Sidebar = () => {
    return (
        <SidebarWrapper theme={'light'} width={250}>
            <ProfileNav />
            {/* <Navigation /> */}
            <Navigation />
            <MyMusic />
        </SidebarWrapper>
    )
}

export default Sidebar