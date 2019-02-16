import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({children, ...props}) => {
  return(<div className="code-preview" {...props}>
    {children}
  </div>);
};

export { Preview };
