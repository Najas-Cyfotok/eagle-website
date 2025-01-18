import { motion } from "framer-motion";
import { Products } from "@/assets/asset";
import { useParams } from "react-router-dom";

const ProductDetailsCard = () => {
  const { id } = useParams();
  const product = Products.find((item) => item.link === id);

  if (!product) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="xl:mx-56 lg:mx-36 md:mx-20 mx-10 h-[500px] max-md:h-screen flex justify-center items-center"
    >
      <div className="flex justify-center gap-x-5 items-center max-md:flex-col max-md:h-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 max-sm:w-full flex justify-center items-center"
        >
          <div className="w-full bg-gray-300 rounded-md shadow-lg flex justify-center items-center h-[400px] hover:scale-105 transition duration-300 hover:bg-orange-300">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="max-w-[300px]"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 max-sm:w-full max-md:mt-10"
        >
          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
            <ProductDetailsList title="Sizes" items={product.sizes} />
            <ProductDetailsList title="Grades" items={[product.grades]} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const ProductDetailsList = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <>
    <p className="font-semibold text-xl">{title}:</p>
    <ul className="flex gap-x-2 flex-wrap max-w-[300px] gap-2">
      {items.map((item, index) => (
        <li key={index} className="text-sm px-2 py-1 rounded-md bg-gray-300">
          {item}
        </li>
      ))}
    </ul>
  </>
);

export default ProductDetailsCard;
