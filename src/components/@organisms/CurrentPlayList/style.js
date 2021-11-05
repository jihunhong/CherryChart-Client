import { StyledAvatar } from '@atoms/AlbumCover/style';
import { ScaleUp, scrollbar } from '@components/Css/style';
import styled from 'styled-components';
import { smooth_render } from '../../KeyFrames';

export const PlayListItemsContainer = styled('ul')`
  width: 100%;
  background: #fff;
  animation-name: ${smooth_render};
  animation-duration: 1s;
  padding: 4px 6px;
  cursor: pointer;

  & .ant-empty {
    margin-top: 20px;
  }

  ${scrollbar}

  .ant-empty {
    & :hover {
      ${ScaleUp}
    }
  }
`;

export const PlayListItem = styled('li')`
  display: flex;
  padding: 6px 0px;
  padding-bottom: 6px;
  border-bottom: 1px solid;
  border-color: rgb(0 0 0 / 10%);
  animation-name: ${smooth_render};
  animation-duration: 1s;
  transition: all 0.3s ease-in-out;

  :hover {
    border-color: rgb(0 0 0 / 60%);
    & .delete-action {
      opacity: 0.6;
    }
  }

  .delete-action {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    :hover {
      opacity: 1;
    }
  }
`;

export const PlayListItemCover = styled('div')`
  float: left;
  margin: auto 0.5vw auto 0;
  ${StyledAvatar} {
    box-shadow: none;
  }
`;

export const PlayListDivision = styled('div')`
  margin: auto 0;
  width: 100%;

  & svg {
    float: right;
    margin: auto auto;
  }
`;

export const PlayListItemTitle = styled('h4')`
  margin: auto 0;
  font-weight: 500;
`;
export const PlayListItemArtist = styled('p')`
  margin: auto 0;
  font-weight: 500;
`;
