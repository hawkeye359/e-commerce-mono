import { updateProductService } from '@/services/admin/catalogue/update-prodct.service';
import { HOST } from '@/utils/api-client';
import { useForm } from '@tanstack/react-form';
import { useQueryClient } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { genUploader } from 'uploadthing/client';
import * as z from 'zod';
import { useImageStore, type ImageState } from './use-image-upload-store';
import { useProductDetails } from './use-product-details';

export const { uploadFiles } = genUploader({
  url: `${HOST}/uploadthing`,
});

const formValidator = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
});

const checkForUrlErrorInImages = (images: ImageState[]) => {
  for (let i = 0; i < images.length; i++) {
    if (!images[i].url) {
      return true;
    }
  }
  return false;
};
async function createFilesFromUrls(urls: string[]): Promise<ImageState[]> {
  const allPromises = urls.map(async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch file');
    }

    const blob = await response.blob();

    const file = new File([blob], '', {
      type: blob.type,
    });

    const imageState: ImageState = {
      id: nanoid(),
      file,
      loading: false,
      error: false,
      url,
    };

    return imageState;
  });

  return Promise.all(allPromises);
}

export const useUpdateProduct = (id: string, onSuccess?: () => void) => {
  const { images, replaceImageState, addImages, deleteImage, reset } =
    useImageStore();

  const queryClient = useQueryClient();

  const {
    data,
    isErrorInFetchingProductDetails,
    erorrInFetchingProductDetails,
    isFetchingProductDetails,
  } = useProductDetails(id, async (result) => {
    form.reset({
      title: result.title,
      description: result.description,
      price: result.price.toString(),
    });

    console.log(form.state.values);
    const images = await createFilesFromUrls(result.images);
    addImages(images);
  });

  const form = useForm({
    defaultValues: {
      title: data?.title || '',
      description: data?.description || '',
      price: data?.price.toString() || '',
    },
    validators: {
      onChange: formValidator,
      onSubmit: formValidator,
    },
    onSubmit: async ({ value }) => {
      if (checkForUrlErrorInImages(images)) {
        toast.error(
          'Erorr in uploading image. delete the images and retry the upload.',
        );
        return;
      }
      const response = await updateProductService(id, {
        ...value,
        price: parseFloat(value.price),
        images: images.map((image) => image.url) as string[],
      });
      if (!response.success) {
        toast.error(response.error.detail);
      }
      toast.success('Product updated successfully');
      try {
        onSuccess && onSuccess();
      } catch (e) {}
      queryClient.invalidateQueries({
        queryKey: ['admin', 'product', 'list'],
      });
      queryClient.invalidateQueries({
        queryKey: ['product', 'list'],
      });
      queryClient.invalidateQueries({
        queryKey: ['product', 'details', id],
      });
    },
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const isImageUploading = (function (): boolean {
    return images.reduce((acc, image) => {
      return acc || image.loading;
    }, false);
  })();

  const isLoading = form.state.isSubmitting || isImageUploading;

  const onClickUploadPhotos = async (recievedImages: File[]) => {
    if (recievedImages) {
      const convertedImages: ImageState[] = recievedImages.map((imageFile) => {
        const id = nanoid();
        uploadFiles('imageUploader', {
          files: [imageFile],
        })
          .then((data) => {
            replaceImageState(id, {
              loading: false,
              url: data[0].ufsUrl,
            });
          })
          .catch(() => {
            replaceImageState(id, {
              loading: false,
              error: true,
            });
          });
        return {
          id,
          file: imageFile,
          loading: true,
          error: false,
          url: null,
        };
      });
      addImages(convertedImages);
    }
  };

  const retryUpload = (image: ImageState) => {
    replaceImageState(image.id, {
      loading: true,
      error: false,
      url: null,
    });
    uploadFiles('imageUploader', {
      files: [image.file],
    })
      .then((data) => {
        replaceImageState(image.id, {
          loading: false,
          url: data[0].ufsUrl,
        });
      })
      .catch(() => {
        replaceImageState(image.id, {
          loading: false,
          error: true,
        });
      });
  };

  return {
    isErrorInFetchingProductDetails,
    erorrInFetchingProductDetails,
    isFetchingProductDetails,
    isLoading,
    images,
    onClickUploadPhotos,
    retryUpload,
    deleteImage,
    form,
  };
};
