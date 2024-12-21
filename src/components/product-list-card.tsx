// import { Check } from "lucide-react";
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
};

const ProductListCard = ({ title, des, img }: ProductCardProps) => {
  return (
    <Card className="shadow-lg hover:scale-105 transition duration-300 w-[300px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{des.slice(0, 75).concat("...")}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center ">
        <img src={img} alt={title} className="w-[200px]" />
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-orange-600 hover:bg-orange-500">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductListCard;
