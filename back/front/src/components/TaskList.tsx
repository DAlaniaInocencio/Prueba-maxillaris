import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getTasks, createTask, updateTask, deleteTask } from '../utils/api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { Task } from '../interfaces/task';

const TaskList: React.FC = () => {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const { data: tasks, isLoading, isError, error } = useQuery('tasks', getTasks);
  const queryClient = useQueryClient();

  const createMutation = useMutation(createTask, {
    onSuccess: () => queryClient.invalidateQueries('tasks'),
  });
  const updateMutation = useMutation(updateTask, {
    onSuccess: () => queryClient.invalidateQueries('tasks'),
  });
  const deleteMutation = useMutation(deleteTask, {
    onSuccess: () => queryClient.invalidateQueries('tasks'),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  const handleDelete = (taskId: string) => {
    deleteMutation.mutate(taskId);
  };

  return (
    <div>
      <div>
        <button onClick={() => setEditingTask({ id: '', title: '', description: '', completed: false, created_at: '', updated: '' })}>Crear tarea</button>
      </div>
      
      {editingTask && (
        <TaskForm
          task={editingTask}
          onCancel={() => setEditingTask(null)}
          onSave={(task) => {
            if (task.id) {
              updateMutation.mutate(task);
            } else {
              createMutation.mutate(task);
            }
            setEditingTask(null); 
          }}
        />
      )}

      <ul>
        {tasks?.map((task: Task) => (
          <li key={task.id}>
            <TaskItem
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
