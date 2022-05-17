import { StyledAvatar } from '@atoms/AlbumCover/style';
import { ScaleUp, scrollbar } from '@components/Css/style';
import styled from 'styled-components';

export const PlayListItemsContainer = styled('ul')`
  width: 100%;
  background: #fff;
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
  position: relative;
  padding: 6px 0px;
  padding-bottom: 6px;
  border-bottom: 1px solid;
  border-color: rgb(0 0 0 / 10%);
  transition: all 0.3s ease-in-out;

  :hover {
    border-color: rgb(0 0 0 / 60%);
    & .delete-action {
      opacity: 0.6;
    }
  }

  .delete-action {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
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

  h5,
  span {
    margin: 0;
    font-weight: 500;
  }
`;
