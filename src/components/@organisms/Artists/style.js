import styled from 'styled-components';

export const ArtistsContainer = styled.section`
max-width: 93%;
  .ant-row {
    height: 40vh;
    overflow: hidden;
    border-radius: 14px;
    margin: auto;
  }
  .artists-description {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    height: 100%;
  }

  div.artists-avatars {
    display: flex;
    align-items: center;
    overflow-y: hidden;
    overflow-x: clip;
    padding-left: 50px;
  }

  div.artists-avatars-container {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
    transform: rotatez(19deg) translate(84px,-97px);
    > div {
      width: inherit;
      aspect-ratio: 1/1;
      border-radius: 50%;
      overflow: hidden;
      height: auto;

      & span {
        width: 103%;
        height: 103%;
      }
    }
  }
`;
