import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from "pages/routes";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        useErrorBoundary: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
