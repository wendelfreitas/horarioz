import { Routes } from './routes/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './hooks/use-auth/use-auth';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
