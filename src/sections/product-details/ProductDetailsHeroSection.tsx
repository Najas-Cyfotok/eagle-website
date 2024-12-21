import { productDetailsBG } from "@/assets/asset";
import PagePath from "@/components/page-path";
import { useParams } from "react-router-dom";

const ProductDetailsHeroSection = () => {
  const { id } = useParams();

  return (
    <section className="h-[150px] bg-black px-3 relative overflow-x-hidden">
      <div>
        <img
          src={productDetailsBG}
          alt=""
          className="w-full h-full object-cover absolute top-0 blur-sm"
        />
      </div>
        <div className="w-full h-full bg-black bg-opacity-40 absolute bottom-0 pb-6 flex flex-col justify-end">
          <PagePath param="Products" subParams={id} category="Home" />
        </div>
    </section>
  );
};

export default ProductDetailsHeroSection;
