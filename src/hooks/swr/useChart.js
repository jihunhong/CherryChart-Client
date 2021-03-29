import useSWR from 'swr';
import { baseURL, fetcher } from '@config';

const useChart = site => {
  const { data, error } = useSWR(`${baseURL}/api/chart/${site}`, fetcher);
  return {
    data,
    error,
    loading: !data && !error,
  };
};

export default useChart;
