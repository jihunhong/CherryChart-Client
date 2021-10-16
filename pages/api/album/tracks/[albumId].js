import axios from 'axios';
import allowCors from '@lib/allowCors';
import { API_URL } from '@config';

export default allowCors(async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/api/album/tracks/${req.query.albumId}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.send(error);
  }
});
