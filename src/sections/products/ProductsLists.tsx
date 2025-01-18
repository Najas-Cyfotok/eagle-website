import { Products } from "@/assets/asset";
import ProductListCard from "@/components/product-list-card";
import { useState } from "react";

const ProductsLists = () => {
  const [products, setProducts] = useState(Products);
  const productsLength = Products.length;

  const sortAtoB = () =>
    setProducts([...Products].sort((a, b) => a.name.localeCompare(b.name)));
  const sortBtoA = () =>
    setProducts([...Products].sort((a, b) => b.name.localeCompare(a.name)));

  return (
    <section className="mx-auto max-w-[1280px] px-5 my-10">
      <div className="flex justify-between items-center">
        <h3>{`Showing ${productsLength} products`}</h3>
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "all") setProducts(Products);
            if (value === "a-b") sortAtoB();
            else if (value === "b-a") sortBtoA();
          }}
        >
          <option value="all">All</option>
          <option value="a-b">Ascending</option>
          <option value="b-a">Descending</option>
        </select>
      </div>

      <div className="grid max-lg:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-5 mt-10 justify-items-center">
        {products.map((item, index) => (
          <ProductListCard
            key={index}
            title={item.name}
            des={item.description}
            img={item.imageUrl}
            link={item.link}
            style={item.class}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsLists;
