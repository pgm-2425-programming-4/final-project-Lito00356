import { API_URL } from "../constants/constants";

export async function getTasks() {
  const result = await fetch(`${API_URL}/tasks`);
  const data = await result.json();

  return data;
}
