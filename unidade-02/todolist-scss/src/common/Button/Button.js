import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { onClick, text, className } = props;
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

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

