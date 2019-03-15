import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ disabled, children, onClick, ...props }) => (
  <button type="button" disabled={disabled} onClick={onClick} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  disabled: false,
  onClick: () => {}
};

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export { Button };
