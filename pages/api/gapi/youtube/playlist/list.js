import allowCors from '@lib/allowCors';
import axios from 'axios';

/**
 * @description 구글 로그인을 거친 유저가 갖고있는 재생목록 조회
 */
export default allowCors(async (req, res) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
      params: {
        part: 'snippet',
        mine: 'true',
        key: process.env.YOUTUBE_API_KEY,
      },
      headers: {
        Authorization: req.headers?.authorization,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.send(error);
  }
});
