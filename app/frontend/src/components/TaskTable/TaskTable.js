import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Task from '../Task/Task';

const TaskTable = ({ tasks = [], }) => {
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckbox = ({ target }) => {
    const value = target.checked
    setSelectAll(value);
  }

  return (
    <div className="table-task-container">
      <h1 className="table-title">Tarefas</h1>
      <table className="task-table">
        <tr className="headers-row">
          <th className="checkbox-table-head">
            <label className='select-all-container'>
              <input
                type="checkbox"
                id="select-all"
                name="selectAll"
                checked={ selectAll }
                onChange={ handleCheckbox } />
            </label>
          </th>
          <th className="description-table-head">
            <span >Descrição</span>
          </th>
          <th className="status-table-head">
            <span>Status</span>
          </th>
        </tr>
      {
        tasks.map(({description, status }, index) => (
          <Task
            key={ index }
            selectAll={ selectAll }
            description={description}
            status={status}
          />
        ))
      }
      </table>
    </div>
)}


TaskTable.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

TaskTable.defaultProps = {
  tasks: [],
};

export default TaskTable;
