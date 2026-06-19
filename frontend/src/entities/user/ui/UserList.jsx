// SIgnel responsibility: только для отображения списка пользователей
export function UserList({users}) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.role}
                </li>
            ))}
        </ul>
    );
}