import allowCors from '@lib/allowCors';
import axios from 'axios';

/**
 * @description '/login' 페이지에서 구글 로그인 하고 나서 프로필 가져올때 이용됨
 */
export default allowCors(async (req, res) => {
  try {
    const response = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
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
