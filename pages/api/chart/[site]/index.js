import axios from 'axios';
import { API_URL } from '@config';

export default async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/api/chart/${req.query.site}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.send(error);
  }
};
