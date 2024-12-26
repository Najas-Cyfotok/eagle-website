import { ObjectiveBG } from "@/assets/asset";
import ObjectiveCard from "@/components/objective-card";
import { Eye, Rocket } from "lucide-react";
import { motion } from "framer-motion";
const ObjectiveSection = () => {
  return (
    <section className="my-20 max-md:h-auto flex items-center justify-center px-5 max-lg:flex-col max-lg:gap-y-6 overflow-x-hidden min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-1/2 flex flex-col gap-y-6 max-lg:w-full items-center max-lg:mt-10 "
      >
        <h2 className="text-5xl font-semibold text-orange-500 ">
          Our Objectives
        </h2>
        <p className="text-lg">
          At Eagle Pipe Fittings and Valves, our goal is to lead the industry in
          providing high-quality, precision-engineered pipe fittings and valves.
          We focus on innovation, quality, and sustainability, ensuring our
          products exceed customer expectations and meet the highest standards
          in the industry.
        </p>
        <div className="relative">
          <img
            src={ObjectiveBG}
            alt="objective-bg"
            className="rounded-lg max-w-[450px] max-sm:w-[350px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg max-w-[450px]"></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-1/2 bg-[#fff6ed] py-5 rounded-lg max-lg:w-full"
      >
        <div className="flex flex-col gap-5 items-center">
          {objectiveData.map((item, index) => (
            <ObjectiveCard key={index} {...item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ObjectiveSection;

export const objectiveData = [
  {
    id: 1,
    title: "Our Mission",
    desc: "To deliver top-quality pipe fittings and valves that exceed our customers' expectations, through continuous innovation.",
    icon: <Rocket />,
  },
  {
    id: 2,
    title: "Our Vision",
    desc: "To be the leading provider of precision-engineered pipe fittings and valves, recognized for our commitment to quality, innovation, and sustainability.",
    icon: <Eye />,
  },
];
