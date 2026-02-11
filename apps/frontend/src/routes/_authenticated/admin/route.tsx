import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/admin')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="">
      <Link to="/admin/catalogue/product">
        <p>Go to Product List</p>
      </Link>
      <Link to="/admin/catalogue/product/create">
        <p>Go to Create Product</p>
      </Link>
      <Outlet />
    </div>
  );
}
