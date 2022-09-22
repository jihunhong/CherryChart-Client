import { SIDEBAR_WIDTH } from '@config';
import MyMusic from '@Layout/MyMusic';
import Navigation from '../Navigation';
import { SidebarContainer } from './style';

const Sidebar = () => {
  return (
    <SidebarContainer
      theme="light"
      width={SIDEBAR_WIDTH}
      breakpoint={'sm'}
      collapsedWidth={0}
      trigger={null}
    >
      {/* <ProfileNav /> */}
      <Navigation />
      <MyMusic />
    </SidebarContainer>
  );
};

export default Sidebar;
