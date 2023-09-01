import { Product } from '@utils/types';

interface Props {
  data: Product[];
}

export default function Products({ data }: Props) {
  return (
    <section>
      <p className="text-xl font-medium">Products</p>
      <ul>
        {data.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </section>
  );
}
