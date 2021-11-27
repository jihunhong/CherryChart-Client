import { MusicWaveContainer, SingleWave } from './style';

const MusicWave = ({ count = 7 }) => {
  return (
    <MusicWaveContainer align="middle">
      {Array(count)
        .fill('stroke')
        .map((_, key) => (
          <div>
            <SingleWave key={key} delay={parseFloat(Math.random().toFixed(1))} />
          </div>
        ))}
    </MusicWaveContainer>
  );
};
export default MusicWave;
