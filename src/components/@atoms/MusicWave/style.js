import { Beated } from '@components/KeyFrames';
import { Row } from 'antd';
import styled from 'styled-components';

export const MusicWaveContainer = styled(Row)`
  * {
    padding: 0;
    margin: 0;
  }

  height: 70px;
  > div {
    height: 70px;
    display: flex;
    align-items: center;
  }
  span {
    display: block;
    position: relative;
    background: #f1f1f1;
    width: 10px;
    height: 100%;
    border-radius: 50px;
    margin: 0 5px;
    animation: ${Beated} 1.2s linear infinite;
  }
`;

export const SingleWave = styled.span`
  animation-delay: ${props => props.delay || 0}s !important;
`;
