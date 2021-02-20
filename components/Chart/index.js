import { ChartContainer, Title, MusicList } from "./style";
import { Typography, Spin } from "antd";
import MusicListItem from "../MusicListItem";
import useChart from "../../hooks/swr/useChart";


const Chart = () => {

    const { data, error, loading } = useChart('melon');
    if(error){
        return <div>Error</div>
    }

    if(loading){
        return <Spin />
    }

    return (
        <ChartContainer>
            <Title level={3}>
                Most Popular
            </Title>
            <Typography.Text type="secondary">
                100 Songs
            </Typography.Text>

            
            <MusicList>
                {
                    data.map((v, i) => (
                        <MusicListItem {...v} key={i} />
                    ))
                }
            </MusicList>
            
            
        </ChartContainer>
    )
}

export default Chart;