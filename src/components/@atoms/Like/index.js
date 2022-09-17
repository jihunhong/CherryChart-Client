import { FiHeart } from 'react-icons/fi';
import { HeartIcon } from './style';

const Like = ({ liked, size = 14 }) => {
  return (
    <HeartIcon $liked={liked}>
      <FiHeart size={size} />
    </HeartIcon>
  );
};

export default Like;
