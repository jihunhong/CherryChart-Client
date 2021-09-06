import axios from 'axios';
import { baseURL } from '@config';

export default async (req, res) => {
  try {
    console.log(req.query);
    const response = await axios.get(`${baseURL}/api/chart/${req.query.site}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.send(error);
  }
};
