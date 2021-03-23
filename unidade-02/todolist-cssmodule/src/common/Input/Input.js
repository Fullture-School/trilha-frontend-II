import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Input.module.css';

const Input = (props) => {
  const onPressKey = (event) => {
    if (event.key === "Enter" && Boolean(props.value)) {
      props.addTask();
    }
  }

  return (
    <div className={styles.inputDataWrapper}>
      <label for={props.id} className={styles.labelInput}>
        {props.label}
      </label>
      <input
        aria-label={props.ariaLabel}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        onKeyPress={props.hasEnter ? onPressKey : () => { }}
        type={props.type}
        value={props.value}
        className={styles.inputData}
      />
    </div>
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
