import React, { useState } from 'react';
import './styles.css';
import api from '../../services/api';
import Header from '../../components/Header/Header';
import TaskTable from '../../components/TaskTable/TaskTable';
import Button from '../../components/Button/Button';

const Main = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [newTask, setNewTask] = useState('');

  function addTask(event) {
    event.preventDefault();
    api.post('/tasks',
    { description: newTask },
    { headers: { authorization: user.token } })
    setNewTask('');
  };

  return (
    <>
      <Header user={ user.name } />
      <TaskTable />
      <div className="new-task-container">
        <input
          className="new-task-input"
          type="text"
          placeholder="Texto da nova tarefa"
          value={ newTask }
          onChange={ ({ target }) => setNewTask(target.value) }
        />
        <Button
          variant="outline"
          onClick={ (event) => addTask(event) }
        >Adicionar Tarefa</Button>
      </div>
    </>
  );
};

export default Main;
