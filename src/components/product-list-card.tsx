import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ProductCardProps = {
  title: string;
  des: string;
  img: string;
  link: string;
};

const ProductListCard = ({ title, des, img, link }: ProductCardProps) => {
  return (
    <Link to={`/product/${link}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Card className="shadow-lg hover:scale-105 transition duration-300 w-[300px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{des.slice(0, 75).concat("...")}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center ">
            <img src={img} alt={title} className="w-[200px] max-h-28" />
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-orange-600 hover:bg-orange-500">
              View Details
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProductListCard;
