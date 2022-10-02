import { MusicWaveContainer, SingleWave } from './style';

const MusicWave = ({ count = 7 }) => {
  return (
    <MusicWaveContainer align="middle">
      {Array.from(Array(count + 1).keys())
        .slice(1)
        .map(number => (
          <div key={number}>
            <SingleWave delay={parseFloat(Math.random().toFixed(1))} />
          </div>
        ))}
    </MusicWaveContainer>
  );
};
export default MusicWave;
