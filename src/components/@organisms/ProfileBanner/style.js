import { ProfileCircleContainer } from '@atoms/ProfileCircle/style';
import { UserScoreContainer } from '@molecules/UserScore/style';
import styled from 'styled-components';

export const ProfileBannerContainer = styled.div`
  position: relative;
  background: linear-gradient(135deg, #ffffff91, #e3e3e3a6);
  border-radius: 4px;
  width: 100%;
  height: 104px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px;

  .absolute-section {
    width: calc(100% - 24px);
    position: absolute;
    bottom: 8px;
    left: 24px;
    display: flex;
    align-items: flex-end;
    ${ProfileCircleContainer} {
      width: 84px;
      height: 84px;
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px;
    }
  }
`;

export const ProfileInfoContainer = styled.div`
  margin-left: 12px;
  h4 {
    font-family: 'Poppins';
    margin: 0;
  }
  h5 {
    margin: 0;
    svg {
      vertical-align: middle;
      margin-right: 4px;
    }
  }
`;

export const UserActionsContainer = styled.div`
  margin-left: 12px;

  button {
    color: var(--dark-gray);
    border-color: var(--dark-gray);
  }
`;

export const UserMetaContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  margin: 0 24px 0 auto;
  ${UserScoreContainer}:not(:last-child) {
    padding-right: 12px;
    border-right: 1px solid var(--light-gray-color);
  }
`;
