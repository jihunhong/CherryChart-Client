import { Typography } from 'antd';
import { ProfileNavContainer, ProfileAvatar } from './style';

const ProfileNav = () => {
    // const { me } = useSelector((state) => state.user);

    return (
        <ProfileNavContainer>
            <ProfileAvatar 
                size={96}
                src={"https://avatars.githubusercontent.com/u/21700764?s=460&u=fe2df1f57cc9e080816be208b9a8767e9a1d6a61&v=4"}
            />
            <Typography.Title level={5} style={{ margin : 0 }}>
                {'Farzan Faruk'}
                {/* {me.userName} */}
            </Typography.Title>
            <Typography.Text type='secondary'>
                {'Luova.studio7@gmail.com'}
                {/* {me.email} */}
            </Typography.Text>
        </ProfileNavContainer>
    )
}

export default ProfileNav;