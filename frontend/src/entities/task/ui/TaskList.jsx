// SIgnel responsibility: только для отображения списка задач
export function TaskList({tasks}) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.title} - {task.description}
                </li>
            ))}
        </ul>
    );
}
