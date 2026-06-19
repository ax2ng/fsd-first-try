import { useState, useEffect } from "react";
import { getUsers, UserList } from "../entities/user";
import { getTasks, TaskList } from "../entities/task";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
    getTasks().then((data) => setTasks(data));
  }, []);

  return (
   <div>
      <h1>Our Team</h1>
      <UserList users={users} />

      <h1>Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;