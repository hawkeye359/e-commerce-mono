import { createFileRoute, Link, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
  beforeLoad: () => {
    throw redirect({
      to: '/products',
    });
  },
});

function App() {
  return (
    <div className="flex justify-center items-center h-svh flex-col">
      <h1> Welcome to the Product Catalogue</h1>
      <Link to="/products">Go to Products</Link>
      <Link to="/admin">Admin Dashboard</Link>
    </div>
  );
}
