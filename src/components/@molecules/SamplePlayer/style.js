import { FlexColumn } from '@atoms/FlexColumn/style';
import { MusicWaveContainer } from '@atoms/MusicWave/style';
import { Headings } from '@atoms/Title/style';
import { ArtistActionsContainer } from '@molecules/ArtistActions/style';
import styled from 'styled-components';

export const SamplePlayerContainer = styled.div`
  width: 100%;
  padding: 22px;
  border-radius: 14px;
  background: var(--primary-color);
  font-family: 'Poppins', sans-serif;

  div.artist-thumb {
    > img {
      border-radius: 14px;
      width: 100%;
      height: auto;
      aspect-ratio: 305/450;
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
  }

  div.player {
    > ${FlexColumn}.container {
      height: 100%;
    }
    ${Headings} {
      margin: 0;
    }
    ${MusicWaveContainer} {
      margin: auto;
      overflow-y: hidden;
    }
    ${ArtistActionsContainer} {
      margin-top: auto;
    }
  }
`;

// 300 66 600
// 31%  8%  62%
