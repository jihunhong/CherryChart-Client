import styled from 'styled-components';

export const ArtistsContainer = styled.section`
  .ant-row {
    height: 40vh;
    overflow: hidden;
    max-width: 91.66666667%;
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
    grid-template-columns: repeat(8, 1fr);
    gap: 12px;
    transform: rotatez(13deg) translate(0px, -97px);
    > div {
      width: inherit;
      aspect-ratio: 1/1;
      height: auto;

      & span {
        width: 103%;
        height: 103%;
      }
    }
  }
`;
