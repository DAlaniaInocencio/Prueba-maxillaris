import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import TaskList from './components/TaskList';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        }}
      >
        <h1>Gestión de Tareas</h1>
        <TaskList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
