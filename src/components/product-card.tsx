import { Products } from "@/assets/asset";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

const ProductCard = () => {
  return (
    <div className="flex  w-full mt-10">
      <Carousel
        className="w-full "
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {Products.map((product, index) => (
            <CarouselItem
              key={index}
              className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
            >
              <div className="p-1">
                <Link to={product.link}>
                  <Card className=" h-[300px] hover:bg-orange-400 transition duration-300 border-none scale-95 hover:scale-100 relative">
                    <CardContent className="flex flex-col items-center  p-6 justify-between">
                      <h3 className="text-base font-bold">{product.name}</h3>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="hover:scale-125 transition duration-300 scale-110"
                      />
                      <div className="w-full flex justify-center font-semibold rounded-b-lg bg-black/75 text-white text-xl absolute bottom-0 p-2 ">
                        <Link to={product.link}>View</Link>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-orange-400 border-none"/>
        <CarouselNext className="hover:bg-orange-400 border-none"/>
      </Carousel>
    </div>
  );
};

export default ProductCard;
