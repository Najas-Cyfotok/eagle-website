import { discoverBG } from "@/assets/asset";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DiscoverSection = () => {
  return (
    <section className="min-h-screen">
      <div className="mx-auto my-20 h-full min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
          className="max-w-[1280px] mx-auto relative top-16 w-full  flex items-center justify-center  h-screen py-5"
        >
          <img
            src={discoverBG}
            alt="discover"
            className="absolute w-full h-full pt-8 pb-16  object-contain bg-blend-darken max-xl:object-cover "
          />
          <div className="z-10 flex justify-center items-center text-white px-1 max-w-[720px] max-md:flex-col">
            <h2 className="text-4xl font-bold w-1/2 max-md:w-full">
              DISCOVER THE DIFFERENCE QUALITY MAKES.
            </h2>
            <div className="w-1/2 max-md:w-full mt-5">
              <p>
                At Eagle Pipe Fittings and Valves, we bring over a decade of
                expertise in delivering top-tier products that exceed industry
                standards. From precision-engineered stainless steel and cast
                iron adapters to innovative solutions in fluid control, our
                commitment to quality and customer satisfaction remains
                unmatched.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-500 mt-5">
                Reach Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverSection;
