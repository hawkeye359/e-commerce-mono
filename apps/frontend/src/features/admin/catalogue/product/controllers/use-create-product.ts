import { createProductService } from '@/services/admin/catalogue/create-product.service';
import { HOST } from '@/utils/api-client';
import { useForm } from '@tanstack/react-form';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { genUploader } from 'uploadthing/client';
import * as z from 'zod';
import { useImageStore } from './use-image-upload-store';

export const { uploadFiles } = genUploader({
  url: `${HOST}/uploadthing`,
});

export interface ImageState {
  id: string;
  file: File;
  loading: boolean;
  error: boolean;
  url: string | null;
}

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

export const useCreateProduct = () => {
  const { images, replaceImageState, addImages, deleteImage, reset } =
    useImageStore();

  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      price: '',
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
      const response = await createProductService({
        ...value,
        price: parseFloat(value.price),
        images: images.map((image) => image.url) as string[],
      });
      if (!response.success) {
        toast(response.error.detail);
      }
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
    isLoading,
    images,
    onClickUploadPhotos,
    retryUpload,
    deleteImage,
    form,
  };
};
