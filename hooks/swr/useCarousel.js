import useSWR from 'swr';
import { baseURL, fetcher } from '../../config';

const useCarousel = ( site ) => {
    const { data, error } = useSWR(`${baseURL}/api/chart/${site}`, fetcher);
    const albums = data && Array.from(new Set(data.map(v => v.album))).map((albumTitle) => {
        const target = data.find((v) => v.album === albumTitle);
        return target;
    })

    return { 
        data : albums, 
        error,
        loading : !data && !error
    };
}

export default useCarousel;