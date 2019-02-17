import React from 'react';
import PropTypes from 'prop-types';

const Block = ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
);

Block.propTypes = {
  children: PropTypes.object.isRequired
}

export { Block };
