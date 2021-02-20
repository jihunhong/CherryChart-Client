import { MusicListItemContainer, Rank, CoverImageContainer, Title, Artist, Duration, HeartIcon } from "./style";
import { Avatar } from "antd";
import { BiHeart } from "react-icons/bi";
import {baseURL} from "../../config";

const MusicListItem = ({ rank, title, artist, duration, album }) => {

    return (
        <MusicListItemContainer>
            
            <Rank>
                { `0${rank}`.slice(-2) }
            </Rank>
            
            <CoverImageContainer>
                <Avatar shape={'square'} size={64} src={`${baseURL}/cover/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`} />
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