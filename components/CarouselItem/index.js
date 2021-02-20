import { CarouselItemContainer, CarouselCoverImage, Title, Artist } from "./style";

const CarouselItem = ({ imgUrl, album, artist }) => {
    return (
        <CarouselItemContainer>
            <CarouselCoverImage background={ imgUrl } />
            <Title level={5}>
                { album.slice(0, 30) }
            </Title>
            <Artist>
                { artist.slice(0, 30) }
            </Artist>
        </CarouselItemContainer>
    )
}

export default CarouselItem;