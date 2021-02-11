import { HeaderWrapper } from "./style";

const Header = ({ children }) => {
    return (
        <HeaderWrapper>
            { children }
        </HeaderWrapper>
    )
}

export default Header;