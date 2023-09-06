interface Props {
  handleProductSearch: () => void;
}

import { useState } from 'react';

export default function SearchBar({ handleProductSearch }: Props) {
  const [search, setSearch] = useState<string>('');

  return (
    <input
      onChange={handleProductSearch}
      className="rounded-lg border-gray-300 border-2 p-2 mb-4 w-[87.5%]"
      placeholder="Search products"
    />
  );
}
