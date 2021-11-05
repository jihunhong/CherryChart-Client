import { API_URL } from '@config';
import allowCors from '@lib/allowCors';
import axios from 'axios';

export default allowCors(async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/api/chart/${req.query.site}`);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    console.log(req.query.site);
    res.status(200).json(response.data);
  } catch (error) {
    res.send(error);
  }
});
