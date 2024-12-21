import { Products } from "@/assets/asset";
import ProductListCard from "@/components/product-list-card";

const ProductsLists = () => {
  const productsLength = Products.length;

  return (
    <section className="mx-auto max-w-[1280px] px-5 my-10">
      <div className="flex justify-between items-center">
        <h3>{`Showing ${productsLength} products`}</h3>
        <select>
          <option>All</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10">
        {
            Products.map((item, index) => (
                <ProductListCard key={index} title={item.name} des={item.description} img={item.imageUrl}/>
            ))
        }
      </div>
    </section>
  );
};

export default ProductsLists;
