import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { UpdateProductForm } from './update-product-form';

export const ProductUpdateDialog = ({ productId }: { productId: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>Update the product details </DialogDescription>
        </DialogHeader>
        <UpdateProductForm
          id={productId}
          onSuccess={() => {
            setIsDialogOpen(false);
          }}
          onClickCancel={() => {
            setIsDialogOpen(false);
          }}
        />
      </DialogContent>
      <DialogTrigger>
        <Button size="lg" variant="secondary">
          Update
        </Button>
      </DialogTrigger>
    </Dialog>
  );
};
