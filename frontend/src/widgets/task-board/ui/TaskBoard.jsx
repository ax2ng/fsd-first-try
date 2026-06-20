import { useState, useEffect } from "react";
import { getTasks, TaskList } from "../../../entities/task";
import { toggleTask, ToggleTaskButton } from "../../../features/toggle-task";

// Widget полностью собранный блок дернули сущности и фичи
export function TaskBoard() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then((data) => setTasks(data));
    }, []);

    const handleToggle = (id) => {
        setTasks((prev) => toggleTask(prev, id));
    };

    return (
        <div>
            <h1>Tasks</h1>
            <TaskList
                tasks={tasks}
                renderAction={(task) => (
                    <ToggleTaskButton
                        done={task.done}
                        onClick={() => handleToggle(task.id)}
                    />
                )}
            />
        </div>
    );
}