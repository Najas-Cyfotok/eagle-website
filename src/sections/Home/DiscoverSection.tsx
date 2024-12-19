import { discoverBG } from "@/assets/asset";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DiscoverSection = () => {
  return (
    <section className="mx-auto h-[700px] my-10">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
      className="max-w-[1280px] mx-auto relative w-full h-full flex items-center justify-center ">
        <img
          src={discoverBG}
          alt="discover"
          className="absolute w-full h-full object-cover bg-blend-darken"
        />
        <div className="z-10 flex justify-center items-center text-white px-3 max-w-[1000px] max-md:flex-col">
          <h2 className="text-4xl font-bold w-1/2 max-md:w-full">
            DISCOVER THE DIFFERENCE QUALITY MAKES.
          </h2>
          <div className="w-1/2 max-md:w-full mt-5">
            <p>
              At Eagle Pipe Fittings and Valves, we bring over a decade of
              expertise in delivering top-tier products that exceed industry
              standards. From precision-engineered stainless steel and cast iron
              adapters to innovative solutions in fluid control, our commitment
              to quality and customer satisfaction remains unmatched.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-500 mt-5">
              Reach Us
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DiscoverSection;
