import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Task from '../Task/Task';
import Button from '../Button/Button';
import api from '../../services/api';
import AppContext from '../../context/AppContext';

const TaskTable = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { tasks, setTasks } = useContext(AppContext);
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks')
      .then(({ data }) => setTasks(data.tasks))
      .catch(({ response }) => console.log(response));
  })

  function handleSelection({ target }) {
    const taskToAdd = tasks.find(({ id }) => id === Number(target.name));
    if (target.checked === true) {
      return setSelectedTasks([...selectedTasks, taskToAdd])
    }
    const aplyDelete = selectedTasks.filter(({ id }) => id !== Number(target.name));
    return setSelectedTasks(aplyDelete);
  }

  function finishTask(event) {
    event.preventDefault();
    selectedTasks.forEach(({ id }) => {
      api.patch(`/tasks/${id}/finish`,
      {},
      { headers: { authorization: user.token } });
    });
    return
  }
  function excludeTask(event) {
    event.preventDefault();
    selectedTasks.forEach(({ id }) => {
      api.delete(`/tasks/${id}`,
      {},
      { Headers: { authorization: user.token }})
    })
    return;
  }

  return (
    <div className="table-task-container">
      <h1 className="table-title">Tarefas</h1>
      <table className="task-table">
        <thead>
          <tr className="headers-row">
            <th className="checkbox-table-head">
              <label className='select-all-container'>
                <input
                  type="checkbox"
                  id="select-all"
                  name="selectAll"
                />
              </label>
            </th>
            <th className="description-table-head">
              <span >Descrição</span>
            </th>
            <th className="status-table-head">
              <span>Status</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(({ id, description, status }, index) => (
              <Task
                key={ index }
                onChange={ handleSelection }
                id={ id }
                description={description}
                status={status}
              />
            ))
          }
        </tbody>
      </table>
      <div className="buttons-container">
        <Button
          variant="outline"
          onClick={ (event) => excludeTask(event) }
        >
          Exlcuir tarefas
        </Button>
        <Button
          variant="outline"
          onClick={ (event) => finishTask(event) }
        >
          Concluir tarefas
        </Button>
      </div>
    </div>
)}


TaskTable.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

TaskTable.defaultProps = {
  tasks: [],
};

export default TaskTable;
