const variantsExample = [
  {
    id: 100,
    available_inventory: 0,
    product_id: 5,
    title: 'Small',
    image: {
      variant_id: 105,
      image_url: 'https://source.unsplash.com/random/300x300?cache=5',
    },
  },
  {
    id: 101,
    available_inventory: 0,
    product_id: 5,
    title: 'Medium',
    image: {
      variant_id: 105,
      image_url: 'https://source.unsplash.com/random/300x300?cache=5',
    },
  },
];

const handleSome = (variant) => variant.available_inventory > 0;

console.log(variantsExample.some(handleSome));
