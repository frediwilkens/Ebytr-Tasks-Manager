import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Task = ({ selectAll, onChange, description, status }) => (
  <tr>
    <td>
      <input type="checkbox" />
    </td>
    <td className="task-description">{ description }</td>
    <td>{ status }</td>
  </tr>
);

Task.propTypes = {
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Task;
