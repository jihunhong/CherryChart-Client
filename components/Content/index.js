import { ContentContainer } from "./style";

const Content = ({ children }) => {
    return (
        <ContentContainer>
            { children }
        </ContentContainer>
    )
}

export default Content;