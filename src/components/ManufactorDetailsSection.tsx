import { Button } from "./ui/button";

type ManufactorDetailsSectionProps = {
  title: string;
  des: string;
  img: string;
  id: number;
};
const ManufactorDetailsSection = ({
  title,
  des,
  img,
  id,
}: ManufactorDetailsSectionProps) => {
  return (
    <div
      className={`flex items-center gap-x-6 max-md:flex-col justify-center mb-10 px-4 py-8 rounded-lg ${
        id % 2 === 0 ? "flex-row-reverse bg-slate-200" : "bg-orange-200"
      }`}
    >
      <div className="w-1/2 flex justify-center max-md:w-full">
        <img
          src={img}
          alt={title}
          className="w-full max-w-[600px] rounded-lg object-contain"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start gap-y-4 max-md:w-full max-md:mt-5 max-md:items-center">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-lg">{des}</p>
        <Button className="hover:bg-orange-500">Continue Reading</Button>
      </div>
    </div>
  );
};

export default ManufactorDetailsSection;
