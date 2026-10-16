import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers() {
  const response = await axios.get(API_URL);
  return response.data;
}