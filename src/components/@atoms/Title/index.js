import { Typography } from 'antd';
import PropTypes from 'prop-types';

const Title = ({ text, level, ellipsis, align = 'left', style }) => {
  return (
    <Typography.Title ellipsis={ellipsis ? <></> : false} level={level} style={{ ...style, textAlign: align }}>
      {text}
    </Typography.Title>
  );
};

Title.defaultProps = {
  align: 'left',
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  ellipsis: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right']),
};

export default Title;