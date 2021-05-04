import { Typography } from 'antd';
import PropTypes from 'prop-types';

const Text = ({ text, type = 'secondary' }) => {
  return <Typography.Text type={type}>{text}</Typography.Text>;
};

Text.defaultProps = {
  type: 'secondary',
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['secondary', 'primary']),
};

export default Text;
