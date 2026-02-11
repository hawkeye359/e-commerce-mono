import { create } from 'zustand';

export interface ImageState {
  id: string;
  file: File;
  loading: boolean;
  error: boolean;
  url: string | null;
}
interface CreateProductStoreState {
  images: ImageState[];
  addImages: (images: ImageState[]) => void;
  replaceImageState: (
    id: string,
    state: Partial<Pick<ImageState, 'loading' | 'error' | 'url'>>,
  ) => void;
  deleteImage: (id: string) => void;
  reset: () => void;
}

export const useImageStore = create<CreateProductStoreState>((set) => ({
  images: [],
  title: '',
  description: '',
  price: 0,

  /* status actions */

  createdSuccessfully: () =>
    set({
      images: [],
    }),

  addImages: (newImages) =>
    set((state) => ({
      images: [...state.images, ...newImages],
    })),

  replaceImageState: (id, next) =>
    set((state) => ({
      images: state.images.map((img) =>
        img.id === id ? { ...img, ...next } : img,
      ),
    })),

  deleteImage: (id) =>
    set((state) => ({
      images: state.images.filter((img) => img.id !== id),
    })),

  reset: () =>
    set({
      images: [],
    }),
}));
