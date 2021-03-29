import { CarouselItemContainer, CarouselCoverImage, Title, Artist } from "./style";
import {baseURL} from "@config";

const CarouselItem = ({ album, artist }) => {
    return (
        <CarouselItemContainer>
            <CarouselCoverImage background={`${baseURL}/api/cover/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`} />
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