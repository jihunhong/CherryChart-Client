import PropTypes from 'prop-types';
import { Headings } from './style';

const Title = ({ children, text = '', level, ellipsis, align, type, style, className, icon }) => {
  return (
    <Headings
      ellipsis={ellipsis ? <></> : false}
      level={level}
      style={{ ...style, textAlign: align }}
      type={type}
      className={className}
    >
      {icon}
      {text || children}
    </Headings>
  );
};

Title.defaultProps = {};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  ellipsis: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right']),
};

export default Title;
