import axios from 'axios';
import { baseURL } from '@config';

export default async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}/api/album/tracks/${req.query.albumId}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.send(error);
  }
};
