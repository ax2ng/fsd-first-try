import {useState} from "react";
import {TeamPage} from "../pages/team-page";
import {TasksPage} from "../pages/tasks-page";

// роутер - какая страница открыта
function App() {
    const [page, setPage] = useState("team");

    return (
        <div>
            <nav>
                <button onClick={() => setPage("team")}>Команда</button>
                <button onClick={() => setPage("tasks")}>Задачи</button>
            </nav>

            {page === "team" && <TeamPage/>}
            {page === "tasks" && <TasksPage/>}
        </div>
    );
}

export default App;