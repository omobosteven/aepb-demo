import { Routes } from 'routes';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'components';

const reactQueryConfig = {
  refetchOnWindowFocus: false,
  retry: false
};

const defaultOptions = {
  queries: reactQueryConfig,
  mutations: reactQueryConfig
};

const queryClient = new QueryClient({
  defaultOptions
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
