import { ProductsBG } from "@/assets/asset";
import ProductCard from "@/components/product-card";

const ProductsSection = () => {
  return (
    <section className="min-h-screen bg-black flex justify-center items-center  max-h-[1080px] max-md:h-[600px] max-md:flex-col max-md:gap-y-16  overflow-x-hidden relative">
      <img
        src={ProductsBG}
        alt="product-BG"
        className="w-full h-full opacity-70 object-cover absolute "
      />
      <div className="z-10 py-16  w-full flex flex-col items-center relative px-16">
        <h2 className="font-semibold text-5xl text-white max-sm:text-3xl">
          Our Products
        </h2>
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsSection;
