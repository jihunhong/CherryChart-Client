import AlbumCover from '@atoms/AlbumCover';
import playerSlice from '@reducers/player';
import { Empty, Typography } from 'antd';
import { AiFillCloseCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { PlayListDivision, PlayListItem, PlayListItemsContainer } from './style';

const CurrentPlayList = () => {
  const dispatch = useDispatch();
  const { playList } = useSelector(state => state.player);

  const handleOnClick = e => {
    dispatch(playerSlice.actions.playSelectedItem(e.currentTarget.dataset.index));
  };

  const handleRemove = e => {
    dispatch(playerSlice.actions.removeItem(e.target.dataset.index));
  };

  return (
    <>
      <PlayListItemsContainer>
        {playList.length === 0 ? (
          <Empty />
        ) : (
          playList.map((item, index) => (
            /* 같은 곡이 플레이리스트 내에 여러개가 존재할수도 있기 때문에! key를 합성해서 구성 */
            // eslint-disable-next-line
            <PlayListItem key={`${item?.videoId}-${index}`}>
              <AlbumCover size={53} src={item?.smallCoverImage} data-index={index} onClick={handleOnClick} />
              <PlayListDivision data-index={index} onClick={handleOnClick}>
                <Typography.Title level={5} ellipsis>
                  {item.title}
                </Typography.Title>
                <Typography.Text level={4} ellipsis>
                  {item.artistName}
                </Typography.Text>
              </PlayListDivision>
              <MdDelete size={22} onClick={handleRemove} data-index={index} className="delete-action" />
            </PlayListItem>
          ))
        )}
      </PlayListItemsContainer>
    </>
  );
};

export default CurrentPlayList;
