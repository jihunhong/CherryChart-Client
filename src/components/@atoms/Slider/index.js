import { SliderContainer } from './style';

const Slider = ({
  dataSource = [],
  renderItem = () => {},
  occupy = 240 / 320,
  gap = 12,
  children = null,
}) => {
  return (
    <SliderContainer $occupy={occupy} $gap={gap}>
      <ul className="list">
        {dataSource?.length > 0 ? dataSource?.map(renderItem) : null}
        {children}
      </ul>
    </SliderContainer>
  );
};

export default Slider;
