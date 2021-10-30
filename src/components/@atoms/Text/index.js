import PropTypes from 'prop-types';
import { Span } from './style';

const Text = ({ text, type = 'primary', ellipsis, ...rest }) => {
  return (
    <Span type={type} {...rest} ellipsis={ellipsis}>
      {text}
    </Span>
  );
};

Text.defaultProps = {
  type: 'primary',
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['secondary', 'primary']),
};

export default Text;
