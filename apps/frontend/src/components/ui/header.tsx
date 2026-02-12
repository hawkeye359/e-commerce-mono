import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

export const Header = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <header
      className={cn(
        'bg-gray-800 text-white h-16 flex items-center px-4 justify-between absolute w-full z-100',
        className,
      )}
      {...props}
    >
      <Link to="/">
        <h1 className="text-xl font-bold">ShopGood</h1>
      </Link>

      <Link to="/admin/product">Admin Dashboard</Link>
    </header>
  );
};
