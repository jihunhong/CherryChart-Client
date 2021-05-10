import { baseURL, fetcher } from '@config';
import useSWR from 'swr';

const useAlbum = albumId => {
  const { data, error } = useSWR(`${baseURL}/api/album/tracks/${albumId}`, fetcher);
  return {
    data,
    error,
    loading: !data && !error,
  };
};

export default useAlbum;
