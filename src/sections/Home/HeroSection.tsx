import { HeroBG } from "../../assets/asset";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen w-full relative flex justify-start items-center bg-black max-h-[1080px]">
      <img
        src={HeroBG}
        alt="Hero bg"
        className="w-full h-full object-cover absolute opacity-50"
      />
      <motion.h1
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-md:text-5xl text-7xl font-bold text-white z-10 px-3"
      >
        Precision Engineered <br />
        Pipe Fittings & Valves
      </motion.h1>
    </section>
  );
};

export default HeroSection;
