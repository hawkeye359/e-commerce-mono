import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ProductUpdateDialog } from '../components/product-update-dialogue';
import { useProductDetails } from '../controllers/use-product-details';

interface IProps {
  productId: string;
}

export const ProductDetails = ({ productId }: IProps) => {
  const {
    data,
    isErrorInFetchingProductDetails,
    erorrInFetchingProductDetails,
    isFetchingProductDetails,
  } = useProductDetails(productId);

  if (isFetchingProductDetails) {
    return <p>Loading</p>;
  }

  if (isErrorInFetchingProductDetails) {
    return (
      <p>
        {erorrInFetchingProductDetails
          ? erorrInFetchingProductDetails.message
          : 'Error in fetching product details'}
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Product Details</h1>
      {data && (
        <div>
          <div className="flex flex-col space-y-4">
            <Carousel className="mt-4">
              <CarouselContent className="relative">
                {data.images.map((image, index) => (
                  <CarouselItem>
                    <img
                      key={index}
                      src={image}
                      alt={`${data.title} - Image ${index + 1}`}
                      className="w-full h-48 object-contain rounded-t-md bg-gray-900"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious></CarouselPrevious>
              <CarouselNext></CarouselNext>
            </Carousel>

            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-bold">{data.title}</h2>
              <p className="text-gray-500">{data.description}</p>
              <p className="text-2xl font-bold">Price: ${data.price}</p>
            </div>
          </div>
        </div>
      )}
      <div className="mt-4">
        <ProductUpdateDialog productId={productId} />
      </div>
    </div>
  );
};
