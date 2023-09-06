import ProductCard from '@components/ProductCard';
import { Product, Variants, SortingOptions } from '@utils/types';

interface Props {
  data: Product[];
  inStock: boolean;
  sortingOptions: SortingOptions;
}

export default function Products({ data, inStock, sortingOptions }: Props) {
  // this function checks if at least the product has one variant with an inventory count > 0 if the filter is on
  const handleVariantInventoryTest = (variant: Variants) =>
    !inStock
      ? variant.available_inventory > 0
      : variant.available_inventory >= 0;

  const handleSortAtoZ = (x: string, y: string): 0 | 1 | -1 => {
    const productX = x.title.toUpperCase();
    const productY = y.title.toUpperCase();
    if (productX < productY) return -1;
    if (productX > productY) return 1;
    return 0;
  };

  const handleSortZtoA = (x: string, y: string): 0 | 1 | -1 => {
    const productX = x.title.toUpperCase();
    const productY = y.title.toUpperCase();
    if (productX < productY) return 1;
    if (productX > productY) return -1;
    return 0;
  };

  return (
    <section className="">
      <ul className="">
        {sortingOptions['orderDefault'] &&
          [...data]
            .filter((product) =>
              product.variants.some(handleVariantInventoryTest)
            )
            .map((product, index) => (
              <ProductCard
                product={product}
                key={index}
                index={index}
                handleVariantInventoryTest={handleVariantInventoryTest}
              />
            ))}
        {sortingOptions['orderAtoZ'] &&
          [...data]
            .sort(handleSortAtoZ)
            .filter((product) =>
              product.variants.some(handleVariantInventoryTest)
            )
            .map((product, index) => (
              <ProductCard
                product={product}
                key={index}
                index={index}
                handleVariantInventoryTest={handleVariantInventoryTest}
              />
            ))}
        {sortingOptions['orderZtoA'] &&
          [...data]
            .sort(handleSortZtoA)
            .filter((product) =>
              product.variants.some(handleVariantInventoryTest)
            )
            .map((product, index) => (
              <ProductCard
                product={product}
                key={index}
                index={index}
                handleVariantInventoryTest={handleVariantInventoryTest}
              />
            ))}
      </ul>
    </section>
  );
}
