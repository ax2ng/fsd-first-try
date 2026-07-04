import { useState, useEffect } from "react";
import { getTasks, updateTask, TaskList } from "../../../entities/task/index.js";
import { toggleTask, ToggleTaskButton } from "../../../features/toggle-task";
import { SearchInput, filterTasks } from "../../../features/search-tasks";

// Widget полностью собранный блок дернули сущности и фичи
export function TaskBoard() {
    const [tasks, setTasks] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        getTasks().then((data) => setTasks(data));
    }, []);

    const handleToggle = async (id) => {
        const current = tasks.find((t) => t.id === id);
        await updateTask(id, !current.done);
        setTasks((prev) => toggleTask(prev, id));
    };

    const doneCount = tasks.filter((t) => t.done).length;
    const visibleTasks = filterTasks(tasks, query);

    return (
        <div>
            <h1>Tasks</h1>
            <p>Сделано {doneCount} из {tasks.length}</p>
            <SearchInput value={query} onChange={setQuery} />
            <TaskList
                tasks={visibleTasks}
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
