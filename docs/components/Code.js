import React from 'react';
import PropTypes from 'prop-types';

const Code = ({children, ...props}) => {
  return (<div className="code-example">
    <pre>
      <code {...props}>{children}</code>
    </pre>
  </div>);
};

export { Code };
