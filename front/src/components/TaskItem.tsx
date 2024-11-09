import React from 'react';
import { Task } from '../interfaces/task';

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    return (
    <div>
      <h3>Título: {task.title}</h3>
      <p>Descripción: {task.description}</p>
      <p>Estado: {task.completed ? 'terminada' : 'pendiente'}</p>
      <p>Fecha de creación: {task.created_at}</p>
      <p>Fecha de actualización: {task.updated}</p>

      <button onClick={() => onEdit(task)}>Editar</button>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>

    </div>
  );
};

export default TaskItem;
