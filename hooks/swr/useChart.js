import useSWR from 'swr';
import { baseURL, fetcher } from '../../config';

const useChart = ( site ) => {
    const { data, error } = useSWR(`${baseURL}/chart/${site}`, fetcher);
    return { 
        data : data && data.map(v => {
            return {
                ...v,
                duration : '3:22'
            }
        }), 
        error,
        loading : !data && !error
    };
}

export default useChart;