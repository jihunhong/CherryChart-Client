import { baseURL, fetcher } from '@config';
import useSWR from 'swr';

const useChart = site => {
  const { data, error } = useSWR(`${baseURL}/api/chart/${site}`, fetcher);
  return {
    data,
    error,
    loading: !data && !error,
  };
};

export default useChart;
