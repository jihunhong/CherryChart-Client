import { API_URL } from '@config/';
import allowCors from '@lib/allowCors';
import axios from 'axios';

/**
 * @description '/login' 페이지에서 구글 로그인 하고 나서 프로필 가져올때 이용됨
 */
export default allowCors(async (req, res) => {
  try {
    console.log(req.cookie);
    const response = await axios.get(`${API_URL}/api/oauth/google/user`, {
      withCredentials: true,
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.send(error);
  }
});
