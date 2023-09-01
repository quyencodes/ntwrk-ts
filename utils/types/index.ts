export interface Variants {
  id: number;
  available_inventory: number;
  product_id: number;
  title: 'Small' | 'Medium' | 'Large';
  image: {
    variant_id: number;
    image_url: string;
  };
}

export interface Product {
  id: number;
  title: string;
  variants: Array<Variants>;
}
