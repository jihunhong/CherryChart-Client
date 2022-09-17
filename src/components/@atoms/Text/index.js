import PropTypes from 'prop-types';
import { memo } from 'react';
import { Span } from './style';

const Text = ({ text, type = 'primary', icon, ellipsis, className, ...rest }) => {
  return (
    <Span
      type={type}
      {...rest}
      ellipsis={ellipsis}
      className={`typography-text${className ? ` ${className}` : ''}`}
    >
      {icon}
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

export default memo(Text);
