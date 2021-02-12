import { MusicListItemContainer, Rank, CoverImageContainer, Title, Artist, Duration, HeartIcon } from "./style";
import { Avatar } from "antd";
import { AiFillHeart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";

const MusicListItem = ({ rank, title, artist, duration, imgUrl }) => {

    return (
        <MusicListItemContainer>
            
            <Rank>
                { `0${rank}`.slice(-2) }
            </Rank>
            
            <CoverImageContainer>
                <Avatar shape={'square'} size={64} src={imgUrl} />
            </CoverImageContainer>

            <Title>
                { title }
            </Title>

            <Artist>
                { artist }
            </Artist>

            <Duration>
                { duration }
            </Duration>

            <HeartIcon>
                <BiHeart />
            </HeartIcon>

        </MusicListItemContainer>
    )
}

export default MusicListItem;