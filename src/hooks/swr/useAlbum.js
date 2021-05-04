import useSWR from 'swr';
import { baseURL, fetcher } from '@config';

const useAlbum = albumId => {
  const { data, error } = useSWR(`${baseURL}/api/album/tracks/${albumId}`, fetcher);
  return {
    data,
    error,
    loading: !data && !error,
  };
};

export default useAlbum;
