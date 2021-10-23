import { API_URL } from '@config';
import allowCors from '@lib/allowCors';
import axios from 'axios';

export default allowCors(async (req, res) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/album/artist/${encodeURIComponent(req.query.artistName)}`,
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.send(error);
  }
});
