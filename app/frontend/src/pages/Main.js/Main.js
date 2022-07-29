import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';
import Header from '../../components/Header/Header';
import TaskTable from '../../components/TaskTable/TaskTable';

const Main = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks')
      .then(({ data }) => setAllTasks(data.tasks))
      .catch(({ response }) => console.log(response));
  }, [setAllTasks])

  return (
    <>
      <Header user={ user.name } />
      <TaskTable tasks={ allTasks }/>
    </>
  );
};

export default Main;
