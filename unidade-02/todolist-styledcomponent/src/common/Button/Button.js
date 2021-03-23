import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styles/Button.style';

function Button(props) {
  const { onClick, text } = props;
  return (
    <ButtonStyled
      key={text}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  )
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

