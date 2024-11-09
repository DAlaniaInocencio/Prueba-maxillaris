import axios from 'axios';
import { Task } from '../interfaces/task';

const apiUrl = 'http://localhost:3000/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const createTask = async (task: Task): Promise<Task> => {
  const response = await axios.post(apiUrl, task);
  return response.data;
};

export const updateTask = async (task: Task): Promise<Task> => {
  const response = await axios.put(`${apiUrl}/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (taskId: string): Promise<void> => {
  await axios.delete(`${apiUrl}/${taskId}`);
};
