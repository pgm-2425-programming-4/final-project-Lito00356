import { API_TOKEN, API_URL } from "../constants/constants";

export async function getProjects() {
  const result = await fetch(`${API_URL}/projects?populate[tasks][populate]=*`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data = await result.json();
  console.log(data);

  return data.data;
}

export async function getProjectById(id) {
  const response = await fetch(`http://localhost:1337/api/projects/${id}?populate[tasks][populate]=*`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data = await response.json();
  console.log(data);

  return data.data;
}
