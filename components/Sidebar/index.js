import { SidebarContainer } from './style';
import ProfileNav from '../ProfileNav';
import Navigation from '../Navigation';
import MyMusic from '../MyMusic';

const Sidebar = () => {
    return (
        <SidebarContainer theme={'light'} width={250}>
            <ProfileNav />
            {/* <Navigation /> */}
            <Navigation />
            <MyMusic />
        </SidebarContainer>
    )
}

export default Sidebar