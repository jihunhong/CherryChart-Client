import { MusicListItemContainer, Rank, CoverImageContainer, Title, Artist, YoutubeIcon, HeartIcon } from "./style";
import { Avatar } from "antd";
import { BiHeart } from "react-icons/bi";
import { FaYoutube } from 'react-icons/fa';
import {baseURL} from "../../config";

const MusicListItem = ({ rank, title, artist, album }) => {

    return (
        <MusicListItemContainer>
            
            <Rank>
                { `0${rank}`.slice(-2) }
            </Rank>
            
            <CoverImageContainer>
                <Avatar shape={'square'} size={64} src={`${baseURL}/api/cover/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`} />
            </CoverImageContainer>

            <Title>
                { title }
            </Title>

            <Artist>
                { artist }
            </Artist>

            <YoutubeIcon>
                <FaYoutube />
            </YoutubeIcon>

            <HeartIcon>
                <BiHeart />
            </HeartIcon>

        </MusicListItemContainer>
    )
}

export default MusicListItem;