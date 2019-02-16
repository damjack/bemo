import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children, ...props }) => {
  return (<h2 {...props}>{children}</h2>);
}

export { Title };
