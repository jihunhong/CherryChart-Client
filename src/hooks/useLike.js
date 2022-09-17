import { likeChartSong, unlikeChartSong } from '@actions/chartActions';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useLike = (id, liker) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const userId = useSelector(state => state.user.me?.id);

  const handleLike = useCallback(() => {
    if (liked) {
      // 좋아요 이미 한 한경우
      dispatch(unlikeChartSong({ id }));
    } else {
      // 좋아요 안했을때
      dispatch(likeChartSong({ id }));
    }
  }, [liked, id]);

  useEffect(() => {
    setLiked(liker?.includes(userId));
  }, [userId, liker]);

  return [liked, handleLike];
};

export default useLike;
