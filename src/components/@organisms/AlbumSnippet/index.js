import AlbumCover from '@atoms/AlbumCover';
import Text from '@atoms/Text';
import Title from '@components/@atoms/Title';
import useAddAlbum from '@hooks/useAddAlbum';
import replaceSize from '@lib/imgixQuality';
import scaleToFit from '@lib/scaleToFit';
import { Button } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useRef } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { SnippetBackground, SnippetGrid, StyledAlbumSnippet } from './style';

const AlbumSnippet = () => {
  const { albumName, tracks, artistName, releaseDate, middleCoverImage, smallCoverImage, albumId } =
    useSelector(state => state.album);
  const artist = useSelector(state => state.album.artist);
  const [handleAlbum] = useAddAlbum({ albumName, tracks, artistName, smallCoverImage, albumId });
  const canvasRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    if (canvasRef.current) {
      const image = new Image();
      image.src = replaceSize(smallCoverImage, 120);
      image.onload = function () {
        scaleToFit(this, canvasRef.current);
      };
    }
  }, [middleCoverImage, artist, canvasRef]);
  return (
    <StyledAlbumSnippet>
      <SnippetBackground>
        <canvas ref={canvasRef} />
      </SnippetBackground>
      <SnippetGrid align="middle" justify="center">
        <AlbumCover size={270} src={middleCoverImage} ref={imgRef} />
        <div className="sight">
          <section className="info">
            <Title text={albumName} level={2} className="album-name" />
            <Title text={artistName} level={3} className="artist-name" />
            <Text
              className="description"
              text={`"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendu"`}
            />
            <Text className="release-date" text={dayjs(releaseDate).format('MMMM DD, YYYY')} />
            <Button
              type="primary"
              onClick={handleAlbum}
              icon={<BsFillPlayFill color="#fff" fill="#fff" />}
            >
              PLAY
            </Button>
          </section>
        </div>
      </SnippetGrid>
    </StyledAlbumSnippet>
  );
};

export default AlbumSnippet;
