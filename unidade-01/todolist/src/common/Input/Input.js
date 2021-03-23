import React from 'react';
import PropTypes from 'prop-types';


const Input = (props) => {
  const onPressKey = (event) => {
    if (event.key === "Enter" && Boolean(props.value)) {
      props.addTask();
    }
  }

  return (
    <input
      aria-label={props.ariaLabel}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      onKeyPress={props.hasEnter ? onPressKey : () => {}}
      type={props.type}
      value={props.value}
    />
  )
}

export default Input;

Input.defaultProps = {
  hasEnter: true
}

Input.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    hasEnter: PropTypes.bool
}
