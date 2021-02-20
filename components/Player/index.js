import { PlayerContainer, PlayerBackground } from "./style";
import YouTube from "react-youtube";
import {Title} from "../Chart/style";
import {Typography} from "antd";

const playList = Array(30).fill();

const Player = () => {
    return (
        <PlayerContainer>
            <Title level={3}>
                Now Playing
            </Title>
            <Typography.Text type="secondary">
                {playList.length} Items on the list
            </Typography.Text>

            <PlayerBackground>
                <YouTube
                    width="100%"
                />
            </PlayerBackground>

        </PlayerContainer>
    )
}

export default Player;