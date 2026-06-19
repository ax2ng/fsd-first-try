// Логика feature
export function toggleTask(tasks, id) {
    return tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
    );
}