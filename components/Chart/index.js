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
    },
    {
        rank : 3,
        title : 'Dynamite',
        artist : '방탄소년단',
        duration : '3:54',
        imgUrl : 'https://cdnimg.melon.co.kr/cm2/album/images/104/79/150/10479150_20200918102847_500.jpg?45d847d7dc536eecebd648786c2ea37c/melon/resize/282/quality/80/optimize'
    },
    {
        rank : 4,
        title : 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)',
        artist : '미란이 (Mirani), 먼치맨(MUNCHMAN), Khundi Panda, 머쉬베놈 (MUSHVENOM)',
        duration : '3:22',
        imgUrl : 'https://cdnimg.melon.co.kr/cm2/album/images/105/21/601/10521601_20201120125511_500.jpg?806b81da822de34e9e1b095e423c5cd1/melon/resize/282/quality/80/optimize'
    },
    {
        rank : 5,
        title : '잠이 오질 않네요',
        artist : '장범준',
        duration : '4:53',
        imgUrl : 'https://cdnimg.melon.co.kr/cm2/album/images/105/08/266/10508266_20201023171236_500.jpg?fc72404bc5ea7d9fa46d63bc4f9e62ec/melon/resize/282/quality/80/optimize'
    },
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