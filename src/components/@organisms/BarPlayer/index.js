import { useSelector } from 'react-redux';

const BarPlayer = () => {
  const { playList } = useSelector(state => state.player);

  return <div></div>;
};

export default BarPlayer;
