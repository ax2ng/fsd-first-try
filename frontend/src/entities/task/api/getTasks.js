import { API_BASE_URL } from "../../../shared/config/api";

// SINGLE responsibilitty: только для получения данных о задачах
export async function getTasks() {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    return response.json();
}