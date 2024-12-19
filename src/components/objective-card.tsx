import React from "react"
import { Card } from "./ui/card"

type ObjectiveCardProps = {
    title:string,
    desc:string,
    icon:JSX.Element
}
const ObjectiveCard = ({title,desc,icon}:ObjectiveCardProps) => {
  return (
    <div>
        <Card className="flex flex-col gap-3 items-center justify-center max-w-[300px] py-2 px-3 hover:bg-orange-500 hover:text-white transition duration-300 shadow-lg">
            {icon && React.cloneElement(icon, { className: "w-20 h-20 " })}
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-center">{desc}</p>
        </Card>
    </div>
  )
}

export default ObjectiveCard