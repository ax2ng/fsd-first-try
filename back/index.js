import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 3001;

const users = [
    {id: 1, name : 'Nikita', role : 'Intern'},
    {id: 2, name : 'Alex', role : 'Developer'},
    {id: 3, name : 'Maria', role : 'Designer'}
];

const tasks = [
    {id: 1, title : 'Task 1', description : 'Understanding the FSD technique', done: true},
    {id: 2, title : 'Task 2', description : 'Make sure understand the concept', done: true},
    {id: 3, title : 'Task 3', description : 'are you sure about this?', done: true},   
]

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});