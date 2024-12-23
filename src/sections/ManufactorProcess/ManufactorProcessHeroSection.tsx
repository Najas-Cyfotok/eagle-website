import { manufacturingProcessBG } from "@/assets/asset";
import PagePath from "@/components/page-path";

const ManufactorProcessHeroSection = () => {
  return (
    <section className="h-[300px] relative">
      <img
        src={manufacturingProcessBG}
        alt="product page bg"
        className="w-full h-full object-cover absolute top-0 "
      />
      <div className="w-full h-full bg-black bg-opacity-40 absolute top-0">
        <div className="flex flex-col gap-y-4 max-w-[1280px] mx-auto  mt-28">
          <PagePath param="Manufacturing Process" category="Home" />
          <h2 className="text-7xl max-md:text-4xl font-bold text-white">Manufacturing Process</h2>
        </div>
      </div>
    </section>
  );
};

export default ManufactorProcessHeroSection;
