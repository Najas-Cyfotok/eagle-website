import { cncturing, logoFlip } from "@/assets/asset";
import ObjectiveCard from "@/components/objective-card";
import { Eye, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const ObjectiveSection = () => {
  return (
    <section className="my-20 flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      {/* Centered Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center "
      >
        <h2 className="text-5xl font-semibold text-orange-500 inline-block px-5 mt-[110px] mb-[20px]">
          Our Objectives
        </h2>
      </motion.div>

      {/* Two Equal Parts */}
      <div className="flex w-full min-h-[70vh] max-lg:flex-col">
        {/* Left Side with Background Image and Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 bg-cover bg-center flex flex-col justify-center items-center gap-y-6 p-10 text-white max-lg:w-full bg-opacity-50 relative"
          // style={{
          //   backgroundImage: `url(${cncturing})`,
          // }}
        >
          <img
            src={cncturing}
            alt="cntuning"
            className="w-full h-full object-cover absolute -z-10 opacity-50"
          />
          <div className="bg-black bg-opacity-75 p-6 rounded-lg">
            <p className="text-lg">
              At Eagle Pipe Fittings and Valves, our goal is to lead the
              industry in providing high-quality, precision-engineered pipe
              fittings and valves. We focus on innovation, quality, and
              sustainability, ensuring our products exceed customer expectations
              and meet the highest standards in the industry.
            </p>
          </div>
        </motion.div>

        {/* Right Side with Original Styling */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 bg-[#fff6ed] py-3 rounded-lg max-lg:w-full relative z-10 overflow-hidden"
        >
          <img
            src={logoFlip}
            alt="logo-flip"
            className="w-full h-full absolute top-0 -z-20 -right-32 scale-100 object-contain max-sm:object-contain max-sm:right-0 opacity-10"
          />
          <div className="flex flex-col gap-5 items-center z-40">
            {objectiveData.map((item, index) => (
              <ObjectiveCard key={index} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
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
