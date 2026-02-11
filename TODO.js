const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];
let id = 1;

// Create
app.post('/tasks', (req, res) => {
  const task = { id: id++, ...req.body };
  tasks.push(task);
  res.json(task);
});

// Read
app.get('/tasks', (req, res) => res.json(tasks));

// Update
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).send('Task not found');
  Object.assign(task, req.body);
  res.json(task);
});

// Delete
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.send('Task deleted');
});

app.listen(3000, () => console.log('TODO API running on port 3000'));