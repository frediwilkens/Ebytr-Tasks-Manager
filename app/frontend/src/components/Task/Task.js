import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Task = ({ onChange, id, description, status }) => (
  <tr>
    <td>
      <input
        type="checkbox"
        name={ id }
        onChange={ (event) => onChange(event) }/>
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
