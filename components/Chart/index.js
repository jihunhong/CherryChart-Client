import { ChartContainer, Title, MusicList } from "./style";
import { Typography } from "antd";
import MusicListItem from "../MusicListItem";

const data = [
    {
        rank : 1,
        title : 'Celebrity',
        artist : '아이유',
        duration : '3:02',
        imgUrl : 'https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210127150136_500.jpg?9fcc61fee5df1b9e845a618feaa70b72/melon/resize/282/sharpen/0x1',
    },
    {
        rank : 2,
        title : '밤하늘의 별을',
        artist : '경서',
        duration : '4:32',
        imgUrl : 'https://cdnimg.melon.co.kr/cm2/album/images/105/18/234/10518234_20201113150500_500.jpg?14229bd15eb93dec69341e7d2a01e9ab/melon/resize/282/quality/80/optimize'
    }
]

const Chart = () => {
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