import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/admin/')({
  component: RouteComponent,
  beforeLoad: () => {
    throw redirect({
      to: '/admin/product',
    });
  },
});

function RouteComponent() {
  return <div>Hello "/_authenticated/admin/"!</div>;
}
