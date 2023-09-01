import ProductCard from '@components/ProductCard';
import { Product, Variants } from '@utils/types';

interface Props {
  data: Product[];
  inStock: boolean;
}

export default function Products({ data, inStock }: Props) {
  const handleProductsInStock = () => {
    if (inStock) {
    } else {
    }
  };

  // this function checks if at least the product has one variant with an inventory count > 0 if the filter is on
  const handleProductInventoryTest = (variant: Variants) =>
    !inStock
      ? variant.available_inventory > 0
      : variant.available_inventory >= 0;

  return (
    <section className="">
      <ul className="max-w-[600px]">
        {data
          .filter((product) =>
            product.variants.some(handleProductInventoryTest)
          )
          .map((product, index) => (
            <ProductCard
              product={product}
              key={index}
              index={index}
              inStock={inStock}
            />
          ))}
      </ul>
    </section>
  );
}
