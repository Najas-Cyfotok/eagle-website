import { ProductBG } from "@/assets/asset";
import PagePath from "@/components/page-path";

const ProductsBGSection = () => {
  
  return (
    <section className="h-[300px] relative">
      <img
        src={ProductBG}
        alt="product page bg"
        className="w-full h-full object-cover absolute top-0 "
      />
      <div className="w-full h-full bg-black bg-opacity-40 absolute top-0">
        <div className="flex flex-col gap-y-4 max-w-[1280px] mx-auto  mt-28">
          <PagePath param="Products" category="Home" />
          <h2 className="text-7xl font-bold text-white">Products</h2>
        </div>
      </div>
    </section>
  );
};

export default ProductsBGSection;
