import { API_BASE_URL } from "../../../shared/config/api";

// SINGLE responsibilitty: только для получения данных о пользовтаелях
export async function getUsers() {
    const response = await fetch(`${API_BASE_URL}/users`);
    return response.json();
}