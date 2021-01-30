import { useSelector } from 'react-redux';
import { Avatar, Image, Typography } from 'antd';
import { ProfileNavWrapper } from './style';

const ProfileNav = () => {
    // const { me } = useSelector((state) => state.user);

    return (
        <ProfileNavWrapper>
            <Avatar 
                size={64}
                src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                // src={<Image src={me.profileSrc} />}
            />
            <Typography.Title level={4}>
                {'Jihun Hong'}
                {/* {me.userName} */}
            </Typography.Title>
            <Typography.Text type='secondary'>
                {'redgee49@gmail.com'}
                {/* {me.email} */}
            </Typography.Text>
        </ProfileNavWrapper>
    )
}

export default ProfileNav;