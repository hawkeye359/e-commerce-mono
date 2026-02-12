import { Button } from '@/components/ui/button';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useUpdateProduct } from '../controllers/use-update-product';

export const UpdateProductForm = ({
  id,
  onSuccess,
}: {
  id: string;
  onSuccess: () => void;
  onClickCancel?: () => void;
}) => {
  const {
    isFetchingProductDetails,
    images,
    isLoading,
    onClickUploadPhotos,
    retryUpload,
    deleteImage,
    form,
  } = useUpdateProduct(id, onSuccess);

  if (isFetchingProductDetails) {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="">
      <div className="w-full max-w-md">
        <form
          id="update-product-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Update Product</FieldLegend>
              <FieldGroup>
                <form.Field
                  name="title"
                  children={(field) => (
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Product Title
                      </FieldLabel>
                      <Input
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        onBlur={field.handleBlur}
                        id="checkout-7j9-card-name-43j"
                        placeholder="Evil Rabbit"
                        required
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-sm mt-1">
                          {field.state.meta.errors.join(', ')}
                        </p>
                      )}
                    </Field>
                  )}
                ></form.Field>
                <form.Field
                  name="description"
                  children={(field) => (
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                        Product Description
                      </FieldLabel>
                      <Textarea
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        onBlur={field.handleBlur}
                        id="checkout-7j9-card-number-uw1"
                        placeholder="Enter product description"
                        required
                      />
                    </Field>
                  )}
                ></form.Field>
              </FieldGroup>
              <FieldGroup>
                <form.Field
                  name="price"
                  children={(field) => (
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Product price
                      </FieldLabel>
                      <Input
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        onBlur={field.handleBlur}
                        id="checkout-7j9-card-name-43j"
                        placeholder="Evil Rabbit"
                        required
                        type="number"
                      />
                    </Field>
                  )}
                ></form.Field>
              </FieldGroup>
              <FieldGroup>
                {images.map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.url ?? URL.createObjectURL(image.file)}
                      alt="Uploaded"
                      className="w-32 h-32 object-cover rounded"
                    />
                    {image.loading && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white">Uploading...</span>
                      </div>
                    )}
                    {image.error && (
                      <div className="absolute inset-0 bg-red-500 bg-opacity-50 flex items-center justify-center">
                        <span className="text-white">Upload Failed</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => retryUpload(image)}
                        >
                          Retry
                        </Button>
                      </div>
                    )}
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteImage(image.id)}
                      className="absolute top-1 right-1"
                    >
                      Delete
                    </Button>
                  </div>
                ))}
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Product Image
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Evil Rabbit"
                    required
                    type="file"
                    multiple
                    onChange={(e) => {
                      onClickUploadPhotos(Array.from(e.target.files ?? []));
                    }}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>

          <FieldGroup className="mt-4">
            <Field orientation="horizontal">
              <Button
                onClick={form.handleSubmit}
                form="update-product-form"
                type="submit"
                disabled={isLoading}
              >
                Submit
              </Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};
