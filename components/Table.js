import React from 'react';
import PropTypes from 'prop-types';

const getRows = rows => Object.keys(rows).map(row => (
  <tr key={row}>
    <td>{rows[row].class}</td>
    <td>{rows[row].property}</td>
    <td>{rows[row].sample}</td>
  </tr>
  )
);

const Table = ({children, ...props}) => (
  <table {...props}>
    <thead>
      <tr>
        <th>Class</th>
        <th>Properties</th>
        <th></th>
      </tr>
    </thead>
    <tbody>{getRows(children)}</tbody>
  </table>
);

Table.propTypes = {
  children: PropTypes.object.isRequired
}

export { Table };
