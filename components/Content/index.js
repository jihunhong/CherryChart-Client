import { ContentWrapper } from "./style";

const Content = ({ children }) => {
    return (
        <ContentWrapper>
            { children }
        </ContentWrapper>
    )
}

export default Content;