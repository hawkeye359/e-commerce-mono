import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AdminProductList } from '../components/admin-product-list-view';
import { CreateProductForm } from '../components/create-product';
import { useAdminProductList } from '../controllers/use-admin-product-list';

export const ProductListScreen = () => {
  const { isLoading, data, isError, error } = useAdminProductList();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <div className="w-full max-w-md my-20">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <div className="w-full max-w-md my-20">
          <h1 className="text-2xl font-bold mb-4">Error: {error?.message}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Product List</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <form>
            <DialogTrigger asChild>
              <Button variant="default">Create new product +</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Create new product</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <CreateProductForm
                onClickCancel={() => {
                  setIsDialogOpen(false);
                }}
                onSuccess={() => {
                  setIsDialogOpen(false);
                }}
              />
            </DialogContent>
          </form>
        </Dialog>
      </div>
      <AdminProductList products={data || []} />
    </div>
  );
};

export default ProductListScreen;
