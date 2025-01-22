import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import manufactor1 from "../../assets/manufactor/shell-moulding.png";

export function BentoGridDemo() {
  return (
    <section className="min-h-screen">
      <BentoGrid className="max-w-7xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Induction melting",
    description:
      "Shell molding, also known as shell casting or investment casting, is a precision casting process used to create intricate metal parts. This process allows us to produce high-quality, complex shapes with excellent surface finishes.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    Img: manufactor1,
  },
  {
    title: "Shell moulding",
    description:
      "CO2 molding, or CO2 sand casting, is a method where carbon dioxide is used to harden the sand mold. This process ensures that our castings have excellent surface finishes and dimensional accuracy.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CO2 moulding",
    description:
      "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CNC Machining",
    description:
      "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Powder coating",
    description:
      "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Laser engraving",
    description:
      "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "⁠Laser cutting",
    description:
      "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "3D modelling",
    description:
      "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "3D printing ",
    description:
      "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Speed cast",
    description:
      "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
