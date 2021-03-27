import { PlayerContainer, PlayerBackground, Title, PlayerHeader, PlayerSaveContainer, Description } from "./style";
import YouTube from "react-youtube";
import { BiListPlus } from "react-icons/bi";
import TogglePlaylistButton from "../TogglePlaylistButton";

const playList = Array(30).fill();

const Player = () => {
    return (
        <PlayerContainer>
            {/* <YouTube width="500"/> */}
            <PlayerHeader>
                <Title level={3}>
                    Now Playing
                </Title>
                <Description type="secondary">
                    {playList.length} Items on the list
                </Description>
                <TogglePlaylistButton />
            </PlayerHeader>
            <PlayerSaveContainer>
                <Description type="secondary">
                    <BiListPlus/>
                </Description>
            </PlayerSaveContainer>

            {/* <PlayerBackground>
            </PlayerBackground> */}

        </PlayerContainer>
    )
}

export default Player;