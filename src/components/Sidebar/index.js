import { SidebarContainer } from './style';
import ProfileNav from '../ProfileNav';
import Navigation from '../Navigation';
import MyMusic from '../MyMusic';
import { SIDEBAR_WIDTH } from '../../config';

const Sidebar = () => {
    return (
        <SidebarContainer theme={'light'} width={SIDEBAR_WIDTH}>
            <ProfileNav />
            <Navigation />
            <MyMusic />
        </SidebarContainer>
    )
}

export default Sidebar