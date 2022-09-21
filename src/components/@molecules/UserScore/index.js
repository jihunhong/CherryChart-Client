import numberFormatter from '@lib/numberFormatter';
import { UserScoreContainer } from './style';

const UserScore = ({ count = 0, label = '' }) => {
  return (
    <UserScoreContainer align="middle">
      <span className="value">{numberFormatter(count)}</span>
      <span className="label">{label}</span>
    </UserScoreContainer>
  );
};

export default UserScore;
