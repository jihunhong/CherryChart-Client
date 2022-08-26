import { UserScoreContainer } from './style';

const UserScore = ({ count = 0, label = '' }) => {
  return (
    <UserScoreContainer align="middle">
      <span className="value">{count}</span>
      <span className="label">{label}</span>
    </UserScoreContainer>
  );
};

export default UserScore;
