import logo from "../assets/logo-dark.png";
import logoWhite from "../assets/logo-white.png";
import logoGrey from "../assets/Home/eagle black.png";
import logoFlip from "../assets/logo-flip.png";
import HeroBG from "../assets/Home/bg2.jpeg";
import ProductAbout from "../assets/Home/eagle.png";
import ProductsBG from "../assets/Home/machine-turning-metal-bg.png";
import ObjectiveBG from "../assets/Home/objective.jpg";
import discoverBG from "../assets/Home/discoverBG.png";
import ProductBG from "./products/product-bg.jpeg";
import productDetailsBG from "./product-details/intense-foundry.jpg";
import manufacturingProcessBG from "./manufactor/manufactorBG.jpg";
import ContactBG from "./contact/contactBG.png";
// import product1 from "./products/1.png";
// import product2 from "./products/2.png";
// import product3 from "./products/3.png";
// import product4 from "./products/4.png";
// import product5 from "./products/5.png";
// import product6 from "./products/6.png";
// import product7 from "./products/7.png";
// import product8 from "./products/8.png";
// import product9 from "./products/9.png";
// import product10 from "./products/10.png";
// import product11 from "./products/11.png";
// import product12 from "./products/12.png";
// import product13 from "./products/13.png";
import cncturing from "./Home/cncturing.jpg";
import EnduratekLogo from "./Home/enduratek.png";
import skanthalogo from "./Home/skantha_logo.enc.png";
import cepllogo from "./Home/cepllogo.png";
import manufactor1 from "./manufactor/shell-moulding.png";
import manufactor2 from "./manufactor/co2-moulding.png";
import manufactor3 from "./manufactor/power-coating.png";

import p1 from "./products/images/Product_11.png";
import p2 from "./products/images/Product_5.png";
import p3 from "./products/images/Product_6.png";
import p4 from "./products/images/Product_7.png";
import p5 from "./products/images/Product_1.png";
import p6 from "./products/images/Product_13.png";
import p7 from "./products/images/Product_8.png";
import p8 from "./products/images/Product_10.png";
import p9 from "./products/images/Product_4.png";
import p10 from "./products/images/Product_9.png";
import p11 from "./products/images/Product_2.png";
import p12 from "./products/images/Product_12.png";
import p13 from "./products/images/Product_3.png";
import p14 from "./products/images/Jet_Assembly.png";
import p15 from "./products/images/hosecollar.png";
import p16 from "./products/images/nrv.png";
// import p14

export const Products = [
  {
    id: 1,
    name: "Pipe Adapters",
    imageUrl: p5,
    description:
      "The Pipe adapters (Top adapters) is used for connecting top most column pipe to the discharge fitting/discharge bend",
    sizes: ["1”", "1¼”", "1½”", "2”", "2½”", "3”", "4”", "5”", "6”"],
    grades: "SS 304 & Cast Iron",
    properties: [],
    link: "pipe-adapters",
    class:
      "hover:scale-110  transition duration-300  scale-100 mt-6 w-auto h-44",
  },
  {
    id: 2,
    name: "Pump Adapters",
    imageUrl: p11,
    description:
      "The bottom adapter is used for connecting submersible pump to the column pipe. All threads are checked with fitment gauges for 100% accuracy.",
    sizes: ["1”", "1¼”", "1½”", "2”", "2½”", "3”", "4”", "5”", "6”"],
    grades: "SS 304 & Cast Iron",
    properties: [],
    link: "pump-adapters",
    class:
      "hover:scale-110  transition duration-300  scale-100 mt-8 w-auto h-40",
  },
  {
    id: 3,
    name: "Reducers",
    imageUrl: p2,
    description:
      "Reducers are designed with ACME thread to ensure proper gripping & there is no chance of column slippage during installation & removal of pumps.",
    sizes: ["1¼”x1”", "1½”x1¼”", "2”x1½”", "2½”x2”"],
    grades: "SS 304 & Cast Iron",
    properties: [],
    link: "reducers",
    class:
      "hover:scale-110  transition duration-300  scale-100 w-auto h-36 mt-10",
  },
  {
    id: 4,
    name: "Expanders",
    imageUrl: p4,
    description:
      "Expanders are designed to expand the pump discharge connecting the BSP Threaded side to the pump 6 ACME Threaded side to the column pipe.",
    sizes: ["1¼”X1½”", "1½”X2”"],
    grades: "",
    properties: ["CNC Threaded", "Rust Free"],
    link: "expanders",
    class:
      "hover:scale-110  transition duration-300  scale-100 mt-8 w-auto h-40",
  },
  {
    id: 5,
    name: "Super Heavy Adapters",
    imageUrl: p8,
    description:
      "Super heavy adapters ensure they withstand substantial loads and stresses, making them suitable for heavy-duty applications.",
    sizes: ["1¼”", "1½”", "2”"],
    grades: "",
    properties: [],
    link: "super-heavy-adapters",
    class:
      "hover:scale-110  transition duration-300  scale-100 w-auto h-52 mt-2",
  },
  {
    id: 6,
    name: "Cast Iron Adapters",
    imageUrl: p9,
    description:
      "Cast Iron Adapters are suitable for low-depth borewells, the outer surface is finished with powder coating for atmospheric protection.",
    sizes: [],
    grades: "",
    properties: ["CNC thread", "Cable Slot", "Rope Slot", "Nitrile O'Ring"],
    link: "cast-iron-adapters",
    class:
      "hover:scale-110  transition duration-300  scale-100 w-auto h-44 mt-6",
  },
  {
    id: 7,
    name: "Rope Collar",
    imageUrl: p13,
    description:
      "Rope Collar is used to secure the pump by connecting ropes at both ends of the Rope Collar.",
    sizes: ["1¼”", "1½”", "2”"],
    grades: "SS 304",
    properties: [],
    link: "rope-collar",
    class:
      "hover:scale-110  transition duration-300  scale-100 w-auto hover:scale-90 scale-75 mt-[40px]",
  },
  {
    id: 8,
    name: "Hose Nipple",
    imageUrl: p6,
    description:
      "Hose Nipple's application is to hold the Pump and HDPE pipe, made out of Stainless steel grade, precisely CNC machined.",
    sizes: ["1”", "1¼”", "1½”"],
    grades: "",
    properties: [],
    link: "hose-nipple",
    class:
      "hover:scale-110  transition duration-300  scale-100 w-auto h-44 mt-6",
  },
  {
    id: 9,
    name: "Hose Collar ",
    imageUrl: p15,
    description:
      "Hose Collar is used to Connect HDPE pipes on both sides, made out of Stainless steel grade, precisely CNC machined.",
    sizes: ["1¼”", "1½”", "2”"],
    grades: "SS 304",
    properties: [],
    link: "hose-collar",
    class:
      "hover:scale-110  transition duration-300  scale-75 w-auto hover:scale-90",
  },

  {
    id: 10,
    name: "Reducer Bush ",
    imageUrl: p12,
    description:
      "A reducer bush is used to connect pipes of different diameters without causing flow disruption.",
    sizes: ["1¼”X1”", "1½”X1”", "1½”X1¼”", "2”X1½”"],
    grades: "",
    properties: [],
    link: "reducer-bush",
    class:
      "hover:scale-110 top-10 transition duration-300 scale-100 w-auto h-28 mt-12",
  },
  {
    id: 11,
    name: "Expander Bush ",
    imageUrl: p1,
    description:
      "Super heavy adapters ensure they withstand substantial loads and stresses, making them suitable for heavy-duty applications.",
    sizes: ["1¼”X1½”", "1½”X2”"],
    grades: "",
    properties: [],
    link: "expander-bush",
    class:
      "hover:scale-110 transition duration-300 scale-100 w-auto h-28 mt-12",
  },
  {
    id: 12,
    name: "Foot Valve",
    imageUrl: p3,
    description:
      "Foot Valve incorporates a double guide support for plunger & O-ring for a positive seal.",
    sizes: ["1”", "1½”"],
    grades: "SS 304",
    properties: [],
    link: "foot-valves",
    class:
      "hover:scale-110 transition duration-300 scale-100 w-auto h-36 mt-10",
  },
  {
    id: 13,
    name: "Jet Assembly ",
    imageUrl: p14,
    description:
      "Jet Assembly increases the compressor pump’s water flow continuity and minimizes water pipe scaling.",
    sizes: ["1¼”X1”"],
    grades: "SS 304",
    properties: ["Rust Free", "Easy To Install", "100% No Welding"],
    link: "jet-assembly",
    class:
      "hover:scale-110 transition duration-300 w-auto hover:scale-75 scale-100 h-36 mt-10",
  },
  {
    id: 14,
    name: "Ferrule FCV/NRV ",
    imageUrl: p10,
    description:
      "FCV/NRV (Flow control & Non-Return Valve) is used to stop the reverse flow of water in FHTC (Functional household tap connection) & to prevent water theft. 'EAGLE' FCV/NRV is certified by FCRI (Fluid control research institute).",
    sizes: [],
    grades: "SS 202, SS 304, SS 316",
    properties: [
      "Stainless Steel SS 316, SS 304, SS 202",
      "CNC Machined",
      "Leak Proof",
      "Long Lasting",
    ],
    link: "ferrule-fcv-nrv",
    class:
      "hover:scale-110  transition duration-300  scale-100 mt-8 w-auto h-40",
  },
  {
    id: 15,
    name: "NRV",
    imageUrl: p16,
    description:
      "The Non-Return Valve (NRV) allows water to flow in one direction, preventing backflow to protect the system and maintain pressure. It is made from SS304 material for enhanced corrosion resistance and features a 33-degree tapered angle at the bottom to ensure a secure seal against backflow.",
    sizes: ["1”", "1 1/4”", "1 1/2”", "2”"],
    grades: "SS 304, Cast iron",
    properties: "",
    link: "nrv",
    class:
      "hover:scale-110  transition duration-300  scale-100 mt-14 w-auto h-32",
  },
];

export const manufacturingProcess = [
  {
    id: 1,
    title: "Induction melting ",
    des: "Shell molding, also known as shell casting or investment casting, is a precision casting process used to create intricate metal parts. This process allows us to produce high-quality, complex shapes with excellent surface finishes.",
    img: manufactor1,
    logo: logoFlip,
  },
  {
    id: 2,
    title: "Shell moulding",
    des: "CO2 molding, or CO2 sand casting, is a method where carbon dioxide is used to harden the sand mold. This process ensures that our castings have excellent surface finishes and dimensional accuracy.",
    img: manufactor2,
    logo: logoGrey,
  },
  {
    id: 3,
    title: "CO2 moulding",
    des: "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    img: manufactor3,
    logo: logoFlip,
  },
  {
    id: 4,
    title: "CNC Machining",
    des: "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    img: manufactor3,
    logo: logoGrey,
  },
  {
    id: 5,
    title: "Powder coating",
    des: "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    img: manufactor3,
    logo: logoFlip,
  },
  {
    id: 6,
    title: "Laser engraving",
    des: "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    img: manufactor3,
    logo: logoGrey,
  },
  {
    id: 7,
    title: "⁠Laser cutting",
    des: "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    img: manufactor3,
    logo: logoFlip,
  },
  {
    id: 8,
    title: "3D modelling ",
    des: "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    img: manufactor3,
    logo: logoGrey,
  },
  {
    id: 9,
    title: "3D printing ",
    des: "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    img: manufactor3,
    logo: logoFlip,
  },
  {
    id: 10,
    title: "Speed cast",
    des: "Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces. Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat to form a durable finish.",
    img: manufactor3,
    logo: logoGrey,
  },
];

export const dummyPhotos = [
  {
    id: 1,
    link: "expander-bush",
    img: p1,
  },
  {
    id: 2,
    link: "reducers",
    img: p2,
  },
  {
    id: 3,
    link: "foot-valves",
    img: p3,
  },

  {
    id: 4,
    link: "expanders",
    img: p4,
  },
  {
    id: 5,
    link: "pipe-adapters",
    img: p5,
  },
  {
    id: 6,
    link: "hose-nipple",
    img: p6,
  },
  {
    id: 7,
    link: "#",
    img: p7,
  },
  {
    id: 8,
    link: "super-heavy-adapters",
    img: p8,
  },
  {
    id: 9,
    link: "cast-iron-adapters",
    img: p9,
  },
  {
    id: 10,
    link: "ferrule-fcv-nrv",
    img: p10,
  },
  {
    id: 11,
    link: "pump-adapters",
    img: p11,
  },
  {
    id: 12,
    link: "reducer-bush",
    img: p12,
  },
  {
    id: 13,
    link: "rope-collar",
    img: p13,
  },
];
export {
  logo,
  logoWhite,
  logoGrey,
  logoFlip,
  HeroBG,
  ProductsBG,
  ObjectiveBG,
  discoverBG,
  ProductBG,
  productDetailsBG,
  manufacturingProcessBG,
  ContactBG,
  cncturing,
  skanthalogo,
  cepllogo,
  EnduratekLogo,
  ProductAbout,
};
