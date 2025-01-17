import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";

type PathProps = {
  param: string;
  subParams?: string;
  category?: string;
  route?: string;
  className?: string;
};
const PagePath = ({ param, subParams, category, route, className }: PathProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Home className="w-5 h-5 mb-1 text-white/70" />
      {category && (
        <>
          <ChevronRight className="w-5 h-5 text-white/70" />
          <p className="text-white/70 font-semibold">{category}</p>
        </>
      )}
      <p className="text-white/70 font-semibold">{
        route ? route : ''
      }</p>
      {param && (
        <div className="max-sm:hidden flex items-center gap-2">
          <ChevronRight className="w-5 h-5 text-white/70" />
          <p className="text-white/80 font-semibold">{param}</p>
        </div>
      )}
      {subParams && (
        <>
          <ChevronRight className="w-5 h-5 text-white/70" />
          <p className="text-white/80 font-semibold">{subParams}</p>
        </>
      )}
    </div>
  );
};

export default PagePath;
