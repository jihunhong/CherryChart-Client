import { FlexColumn } from '@atoms/FlexColumn/style';
import { Headings } from '@atoms/Title/style';
import styled from 'styled-components';

export const SongSliceItemContainer = styled.div`
  border-top: 1px solid rgb(129 129 129 / 60%);
  padding: 8px 0;
  display: flex;
  align-items: center;
  & .row-content {
    width: 100%;
  }
  & .album-cover {
    flex: 0 1 64px;
    margin-right: 16px;
    border-radius: 6px;
  }

  ${FlexColumn} {
    margin: auto 0;
    width: calc(100% - 64px - 16px);
    ${Headings} {
      width: 100%;
    }
  }
`;
