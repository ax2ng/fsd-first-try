// UI бизнес-модели у каждого слайса может быть свой ui
export function TaskList({tasks, renderAction}) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.done ? "+" : "-"} {task.title} {task.description}
                    {renderAction ? renderAction(task) : null}
                </li>
            ))}
        </ul>
    );
}
