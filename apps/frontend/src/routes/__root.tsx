import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import { Header } from '@/components/ui/header';
import { Toaster } from '@/components/ui/sonner';
import { queryClient } from '@/utils/query-client';
import { QueryClientProvider } from '@tanstack/react-query';

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <div className="h-svh w-svw">
        <Header />
        <main className="h-full w-full overflow-y-auto pt-20">
          <Outlet />
        </main>
      </div>

      <Toaster richColors position="top-center" />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </QueryClientProvider>
  ),
});
