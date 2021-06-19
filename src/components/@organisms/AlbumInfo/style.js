import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import { StyledAvatar } from '@atoms/AlbumCover/style';

export const PlayButton = styled(Button)`
  border-radius: 6px;
  & span {
    color: #fff;
  }
`;

export const AlbumInfoHeader = styled.section`
  display: grid;
  grid-template-columns: 270px auto;
  column-gap: 12px;
  align-items: center;

  & h2,
  h3 {
    margin: 0 !important;
    align-items: baseline;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    position: relative;
  }

  & button {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
