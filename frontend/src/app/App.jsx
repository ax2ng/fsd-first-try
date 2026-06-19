import { useState, useEffect } from "react";
import { getUsers, UserList } from "../entities/user";
import { getTasks, TaskList } from "../entities/task";
import { toggleTask, ToggleTaskButton } from "../features/toggle-task";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
    getTasks().then((data) => setTasks(data));
  }, []);

  const handleToggleTask = (id) => {
      setTasks((prevTasks) => toggleTask(prevTasks, id));
  }

  return (
   <div>
      <h1>Our Team</h1>
      <UserList users={users} />

      <h1>Tasks</h1>
      <TaskList
          tasks={tasks}
          renderAction={(task) => (
              <ToggleTaskButton
              done={task.done}
              onClick={() => handleToggleTask(task.id)}
              />
          )}
      />
    </div>
  );
}

export default App;