import { Menu } from "antd";
import { BiHomeAlt, BiWorld } from "react-icons/bi";
import { AiOutlineFileImage, AiOutlineVideoCamera } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { NavigationGlobal, MenuItem } from "./style";

const Navigation = () => {
    return (
        <>
            <NavigationGlobal />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <MenuItem key="1" icon={<BiHomeAlt />}>
                Home
                </MenuItem>
                <MenuItem key="2" icon={<BiWorld />}>
                Browse
                </MenuItem>
                <MenuItem key="3" icon={<AiOutlineFileImage />}>
                Album
                </MenuItem>
                <MenuItem key="4" icon={<FiUser />}>
                Artists
                </MenuItem>
                <MenuItem key="5" icon={<AiOutlineVideoCamera />}>
                Videoes
                </MenuItem>
            </Menu>
        </>
    )
}

export default Navigation;