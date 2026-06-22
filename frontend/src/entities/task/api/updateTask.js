import {API_BASE_URL} from "../../../shared/config/api";

export async function updateTask(id, done) {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ done }),
    });
    return response.json();
}
