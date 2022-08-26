import { API_URL } from '@config/';
import axios from 'axios';
import { useEffect, useState } from 'react';

const usePlaylistItem = pId => {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  useEffect(async () => {
    try {
      const response = await axios.get(`${API_URL}/api/playlist/preview`, {
        params: {
          pId,
        },
      });
      setPreview(response?.data);
    } catch (err) {
      setError(err?.message);
    }
  }, []);

  return [preview, error];
};

export default usePlaylistItem;
