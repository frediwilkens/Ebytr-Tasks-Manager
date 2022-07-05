require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const loginRoutes = require('./routes/login.routes');
const tasksRoutes = require('./routes/tasks.routes');

app.use('/login', loginRoutes);

app.use('/tasks', tasksRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
