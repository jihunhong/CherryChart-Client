import { Typography } from 'antd';
import { ProfileNavWrapper, ProfileAvatar } from './style';

const ProfileNav = () => {
    // const { me } = useSelector((state) => state.user);

    return (
        <ProfileNavWrapper>
            <ProfileAvatar 
                size={96}
                src={"https://dcimg5.dcinside.com/dccon.php?no=62b5df2be09d3ca567b1c5bc12d46b394aa3b1058c6e4d0ca41648b65eee226e566d584f835066177669861e6743682de96779ade11ed9020f77f2955dc1b01ff7b3b50cfe"}
            />
            <Typography.Title level={5} style={{ margin : 0 }}>
                {'Farzan Faruk'}
                {/* {me.userName} */}
            </Typography.Title>
            <Typography.Text type='secondary'>
                {'Luova.studio7@gmail.com'}
                {/* {me.email} */}
            </Typography.Text>
        </ProfileNavWrapper>
    )
}

export default ProfileNav;