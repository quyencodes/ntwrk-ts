import { Product, Variants } from '@utils/types';

interface Props {
  product: Product;
  key: number;
  index: number;
  inStock: boolean;
  handleVariantInventoryTest: (variant: Variants) => boolean;
}

export default function ProductCard({
  product,
  key,
  index,
  inStock,
  handleVariantInventoryTest,
}: Props) {
  return (
    <li className="mb-4" key={index}>
      <h4 className="mb-2">{product.title}</h4>
      <div className="flex flex-row gap-6 flex-wrap">
        {product.variants
          .filter((variant) => handleVariantInventoryTest(variant))
          .map((variant, index) => (
            <div key={index}>
              <img
                className="mb-2"
                src={variant.image.image_url}
                height="100"
                width="200"
                alt="product photo"
              />
              <div className="flex flex-row justify-between">
                <p>{variant.title}</p>
                <p>{variant.available_inventory} units</p>
              </div>
            </div>
          ))}
      </div>
    </li>
  );
}
