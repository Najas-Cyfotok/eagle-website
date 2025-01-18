import { logoGrey, ProductAbout } from "@/assets/asset";
// import ProductsListImage from "@/components/product-list-images";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroAbout = () => {
  return (
    <section className="h-screen px-10 max-md:px-3 bg-[#fff6ed] flex justify-center items-center md:max-h-[1080px]  max-md:flex-col max-md:gap-y-16 overflow-x-hidden overflow-y-hidden mb-0">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-1/2 flex-col flex gap-y-6 max-md:gap-0 max-md:pt-24 relative  min-h-[400px] justify-center max-md:w-full"
      >
        <img
          src={logoGrey}
          alt="logo"
          className="absolute top-24 md:top-4  w-full h-full opacity-5 md:-left-56 scale-110 -left-28"
        />
        <h2 className="font-semibold text-5xl text-orange-600">About US</h2>
        <p className="text-2xl">Engineering with Purpose</p>
        <p className="text-lg">
          Eagle Pipe Fittings and Valves has been a pioneer in the pipe fittings
          industry since 2010. We specialize in manufacturing high-quality
          stainless steel and cast iron adapters, foot valves, and a wide range
          of other precision-engineered components.
        </p>
        <div className="flex gap-x-2 items-center z-10">
          <Button className="bg-orange-600 hover:bg-orange-500">
            Explore Products
          </Button>
          <Button>Contact US</Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-1/2 max-md:w-full "
      >
        {/* <ProductsListImage /> */}
        <Link to={"/products"}>
          <img src={ProductAbout} alt="product list image" />
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroAbout;
