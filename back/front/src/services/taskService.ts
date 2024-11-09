import axios from 'axios';
import { Task } from '../types/taskTypes';

const API_URL = 'http://localhost:3000/tasks';

export const getAllTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener tareas', error);
    throw error;
  }
};

export const createTask = async (newTask: Task): Promise<Task> => {
  try {
    const response = await axios.post(API_URL, newTask);
    return response.data;
  } catch (error) {
    console.error('Error al crear tarea', error);
    throw error;
  }
};

export const deleteTask = async (taskId: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${taskId}`);
  } catch (error) {
    console.error('Error al eliminar tarea', error);
    throw error;
  }
};

export const updateTask = async (updatedTask: Task): Promise<Task> => {
  try {
    const response = await axios.put(`${API_URL}/${updatedTask.id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar tarea', error);
    throw error;
  }
};
