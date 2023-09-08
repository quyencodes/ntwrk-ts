// import packages
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// import from other files
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import Stock from '@components/Stock';
import Sorting from '@components/Sorting';
import Products from '@components/Products';
import { Product, SortingOptions } from '@utils/types';

export default function Home() {
  const productRef = useRef([]);
  const [data, setData] = useState<Product[]>([]);
  const [inStock, setInStock] = useState<boolean>(false);
  const [sortingOptions, setSortingOptions] = useState<SortingOptions>({
    orderDefault: true,
    orderAtoZ: false,
    orderZtoA: false,
  });

  const fetchProductsData = () => {
    return axios
      .get('https://streetwear-2023.s3.us-west-1.amazonaws.com/data.json')
      .then(({ data: { products } }) => {
        console.log(products); // writes to the console what the data looks like from API call
        setData(products);
        productRef.current = products;
      });
  };

  const handleProductSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event?.preventDefault();
    setData((prev) => {
      return productRef.current.filter((product: Product, index) =>
        product.title.toLowerCase().includes(event.target.value)
      );
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="font-bodyFont m-2 p-2 max-w-[500px]">
        <Header
          companyName="Viole Apparel Inc."
          header="Products"
          sortingOptions={sortingOptions}
        />
        <SearchBar handleProductSearch={handleProductSearch} />
        <div className="flex flex-row justify-between max-w-[425px]">
          <Stock inStock={inStock} setInStock={setInStock} />
          <Sorting
            sortingOptions={sortingOptions}
            setSortingOptions={setSortingOptions}
          />
        </div>
        <Products
          data={data}
          inStock={inStock}
          sortingOptions={sortingOptions}
        />
      </main>
    </>
  );
}
