import type { Task } from "../../../entities/task/model/types";

export function filterTasks(tasks: Task[], query: string): Task[] {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
        return tasks;
    }

    return tasks.filter((task) =>
        `${task.title} ${task.description}`.toLowerCase().includes(normalizedQuery)
    );
}
