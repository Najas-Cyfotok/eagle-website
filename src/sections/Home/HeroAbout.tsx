import { logo } from "@/assets/asset";
import ProductsListImage from "@/components/product-list-images";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


const HeroAbout = () => {
  return (
    <section className="h-screen px-10 max-md:px-3 bg-[#fff6ed] flex justify-center items-center max-h-[1080px] max-md:flex-col max-md:gap-y-16 overflow-x-hidden">
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="w-1/2 flex-col flex gap-y-6 relative  min-h-[400px] justify-center max-md:w-full">
        <img src={logo} alt="logo" className="absolute w-full h-full opacity-20" />
        <h2 className="font-semibold text-5xl text-orange-600">About US</h2>
        <p className="text-2xl">Engineering with Purpose</p>
        <p className="text-lg">Eagle Pipe Fittings and Valves has been a pioneer in the pipe fittings industry since 2010. We specialize in manufacturing high-quality stainless steel and cast iron adapters, foot valves, and a wide range of other precision-engineered components.</p>
        <div className="flex gap-x-2 items-center">
            <Button className="bg-orange-600 hover:bg-orange-500">Explore Products</Button>
            <Button>Contact US</Button>
        </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="w-1/2 max-md:w-full ">
        <ProductsListImage/>
      </motion.div>
    </section>
  );
};

export default HeroAbout;
