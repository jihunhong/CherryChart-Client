import LinkHOC from '@atoms/LinkHOC';
import useLogin from '@hooks/user/useLogin';
import useLogout from '@hooks/user/useLogout';
import { Row } from 'antd';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { UserMenuContainer } from './style';

const UserMenu = () => {
  const [handleLogOut] = useLogout();
  const id = useSelector(state => state.user.me?.id);
  return (
    <UserMenuContainer>
      <LinkHOC href={`/user/${id}`}>
        <Row className="menu-item" align="middle">
          <FiUser />
          <span>Profile</span>
        </Row>
      </LinkHOC>
      <Row className="menu-item" align="middle" onClick={handleLogOut}>
        <FiLogOut />
        <span>Logout</span>
      </Row>
    </UserMenuContainer>
  );
};

export default UserMenu;
