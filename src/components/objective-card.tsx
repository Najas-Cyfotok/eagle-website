import React from "react";
import { Card } from "./ui/card";

type ObjectiveCardProps = {
  title: string;
  desc: string;
  icon: JSX.Element;
};
const ObjectiveCard = ({ title, desc, icon }: ObjectiveCardProps) => {
  return (
    <div>
      <Card className="flex flex-col gap-1 items-center justify-center  max-h-[250px] max-w-[350px] py-1 px-3 opacity-75 hover:bg-orange-500 hover:text-white transition duration-300 shadow-lg ">
        {icon && React.cloneElement(icon, { className: "w-10h-10 " })}
        <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-center ">{desc}</p>
      </Card>
    </div>
  );
};

export default ObjectiveCard;
