import { useState, useEffect } from "react";
import { getUsers, UserList } from "../../../entities/user";

export function TeamPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Our Team</h1>
            <UserList users={users} />
        </div>
    );
}