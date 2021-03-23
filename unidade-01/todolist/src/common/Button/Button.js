import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { onClick, className, text } = props;
  return (
    <button
      key={text}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  )
}

export default Button;

Button.defaultProps = {
  className: ''
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

