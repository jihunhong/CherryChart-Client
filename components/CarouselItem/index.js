import { CarouselItemContainer, CarouselCoverImage, Title, Artist } from "./style";

const CarouselItem = ({ imgUrl, title, artist }) => {
    return (
        <CarouselItemContainer>
            <CarouselCoverImage background={ imgUrl } />
            <Title level={5}>
                { title }
            </Title>
            <Artist>
                { artist }
            </Artist>
        </CarouselItemContainer>
    )
}

export default CarouselItem;