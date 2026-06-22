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
    {id: 1, title : 'Task 1', description : 'Understanding the FSD technique', done: false},
    {id: 2, title : 'Task 2', description : 'Make sure understand the concept', done: false},
    {id: 3, title : 'Task 3', description : 'are you sure about this?', done: false},
]

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.use(express.json());

app.patch("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((t) => t.id === id);
    if (!task) return res.status(404).json({ error: "not found" });

    task.done = req.body.done;
    res.json(task);
});

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});