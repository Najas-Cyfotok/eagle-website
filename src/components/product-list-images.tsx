import { Products } from "@/assets/asset";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ProductsListImage = () => {
  return (
    <div className="w-full flex items-end ">
      {Products.map((product, index) => (
        <Link to={`/product/${product.link}`} key={index}>
          <motion.div
            // initial={{ y: -50 }}
            // animate={{ y: 0 }}
            // transition={{
            //   ease: "easeInOut",
            //   duration: 0.5,
            //   delay: index * 0.7,
            //   repeat: Infinity,
            //   repeatType: "reverse",
            // }}
            // whileHover={{ transition: { repeat: 0 } }}
            key={index}
            className="w-full h-full scale-95 hover:scale-105 transition duration-300"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-[200px] object-cover"
            />
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsListImage;
