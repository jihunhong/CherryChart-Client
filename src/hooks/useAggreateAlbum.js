import aggregateAlbum from '@lib/aggregateAlbum';
import { useEffect, useState } from 'react';

const useAggregateAlbum = dataSoucre => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const albums = aggregateAlbum(dataSoucre);
    setData(albums);
  }, [dataSoucre]);

  return data;
};

export default useAggregateAlbum;
