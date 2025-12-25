import { RouterProvider } from 'react-router';
import { appRouter } from './app.router';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import type { PropsWithChildren } from 'react';
import { CustomFullScreenLoading } from './components/custom/CustomFullScreenLoading';
import { useAuthStore } from './admin/store/auth.store';

const queryClient = new QueryClient();

function App() {
  const { checkAuthStatus } = useAuthStore();

  const CheckAuthProvider = ({ children }: PropsWithChildren) => {
    const { isLoading } = useQuery({
      queryKey: ['check-auth'],
      queryFn: checkAuthStatus,
      retry: false,
      refetchInterval: 1000 * 60 * 60 * 1.5, // 1.5 hours
      refetchOnWindowFocus: true,
    });

    if (isLoading) return <CustomFullScreenLoading />;

    return children;
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <CheckAuthProvider>
          <RouterProvider router={appRouter} />
        </CheckAuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
