import { HeaderContainer } from "./style";

const Header = ({ children }) => {
    return (
        <HeaderContainer>
            { children }
        </HeaderContainer>
    )
}

export default Header;