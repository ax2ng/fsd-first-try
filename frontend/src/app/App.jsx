import { useState, useEffect } from "react";
import { getUsers, UserList } from "../entities/user";
import {TaskBoard} from "../widgets/task-board/index.js";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
   <div>
      <h1>Our Team</h1>
      <UserList users={users} />
        <TaskBoard />
    </div>
  );
}

export default App;