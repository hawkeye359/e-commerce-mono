import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/admin')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="">
      <div className="w-60 absolute top-0 h-full pt-20 p-4 border-r bg-gray-600">
        <Link
          to="/admin/product"
          className="[&.active]:bg-gray-700 p-2 block mb-2"
        >
          <div className="">
            <p>Products</p>
          </div>
        </Link>
      </div>
      <div className="pl-64 pr-4">
        <Outlet />
      </div>
    </div>
  );
}
