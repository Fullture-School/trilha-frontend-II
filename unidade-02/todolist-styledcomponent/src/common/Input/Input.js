import React from 'react';
import PropTypes from 'prop-types';
import { InputDataWrapper, InputDaata, LabelInput } from './styles/Input.style';

const Input = (props) => {
  const onPressKey = (event) => {
    if (event.key === "Enter" && Boolean(props.value)) {
      props.addTask();
    }
  }

  return (
    <InputDataWrapper>
      <LabelInput for={props.id}>
        {props.label}
      </LabelInput>
      <InputDaata
        aria-label={props.ariaLabel}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        onKeyPress={props.hasEnter ? onPressKey : () => { }}
        type={props.type}
        value={props.value}
      />
    </InputDataWrapper>
  )
}

export default Input;

Input.defaultProps = {
  hasEnter: true,
  label: ''
}

Input.propTypes = {
  label: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  hasEnter: PropTypes.bool
}
