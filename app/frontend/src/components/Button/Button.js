import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Button = ({
  children,
  variant = 'container',
  onClick,
  disabled = false,
}) => (
  <button
    type="submit"
    onClick={ onClick }
    className={ !disabled && variant === 'container'
      ? 'buttonContainer' : 'buttonOutline' }
    disabled={ disabled }
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
