import logo from "../assets/logo-dark.svg";
import logoWhite from "../assets/logo-light.svg";
import HeroBG from "../assets/Home/bckgrnd.jpg";
import ProductsBG from "../assets/Home/machine-turning-metal-bg.png";
import ObjectiveBG from "../assets/Home/objective.jpg";
import discoverBG from "../assets/Home/discoverBG.png";
import ProductBG from "./products/product-bg.jpeg";
import productDetailsBG from './product-details/intense-foundry.jpg'
import product1 from "./products/1.png";
import product2 from "./products/2.png";
import product3 from "./products/3.png";
import product4 from "./products/4.png";
import product5 from "./products/5.png";
import product6 from "./products/6.png";
import product7 from "./products/7.png";
import product8 from "./products/8.png";
import product9 from "./products/9.png";

export const Products = [
  {
    id: 1,
    name: "Pipe Adapters",
    imageUrl: product1,
    description:
      "The Pipe adapters (Top adapters) is used for  connecting top most column pipe to the discharge fitting/discharge bend",
    sizes: ["1”", "1¼”", "1½”", "2”", "2½”", "3”", "4”", "5”"],
    grades: "304 & Cast Iron",
    properties: [],
    link: "pipe-adapters",
  },
  {
    id: 2,
    name: "Pump Adapters",
    imageUrl: product2,
    description:
      "The Pump adapters (Bottom adapter)is used for connecting submersible pump to the column pipe. All threads are checked with fitment gauges for lOO% accuracy.",
    sizes: ["1”", "1¼”", "1½”", "2”", "2½”", "3”", "4”", "5”"],
    grades: "304 & Cast Iron",
    properties: [],
    link: "pump-adapters",
  },
  {
    id: 3,
    name: "Reducers",
    imageUrl: product3,
    description:
      "Reducers are designed with ACME thread to ensure proper gripping & there is no chance of column slippage during installation & removal of pumps.",
    sizes: [
      "1¼”x1”",
      "1½”x1¼”",
      "1¼”x1½”",
      "1½”x2”",
      "2”x1½”",
      "2½”x2”",
      "4”x3”",
      "5”x4”",
    ],
    grades: "304 & Cast Iron",
    properties: [],
    link: "reducers",
  },
  {
    id: 4,
    name: "Foot Valve",
    imageUrl: product4,
    description:
      "Foot Valve is designed with the latest technology incorporating a double guide support for plunger & O-ring is precision fitted to the poppet for a positive seal into the tapered (33˚) self-cleaning valve.",
    sizes: ["1”", "1½”"],
    grades: "SS 304",
    properties: [],
    link: "foot-valves",
  },
  {
    id: 5,
    name: "Expanders",
    imageUrl: product5,
    description:
      "Expanders are designed to expand the pump discharge connecting the BSP Threaded side to the pump 6 ACME Threaded side to the column pipe.",
    sizes: [],
    grades: "",
    properties: ["CNC Threaded", "Rust Free"],
    link: "expanders",
  },
  {
    id: 6,
    name: "Rope Collar",
    imageUrl: product6,
    description:
      "Rope Collar issued to secure the pump by connect- inq ropes at both ends of the Rope Collar. 'EAGLE´ Rope Collar is a single mould casted component, without any weld joints.",
    sizes: ["1¼”", "1½”", '2"'],
    grades: "SS 304",
    properties: ["Rust Free", "Long Lasting", "100% No Welding"],
    link: "rope-collars",
  },
  {
    id: 7,
    name: "Cast Iron Adapters",
    imageUrl: product7,
    description:
      "Cast Iron Adapters are suitable for low-depth borewells, the outer surface is finished with powder coating for atmospheric protection.",
    properties: ["CNC Threaded", "Cable Slot", "Rope Slot", "Nitrile O’Ring"],
    sizes: [],
    grades: "",
    link: "cast-iron-adapters",
  },
  {
    id: 8,
    name: "Jet Assembly",
    imageUrl: product8,
    description:
      "Jet Assembly increases the compressor pump´s water flow continuity and to minimize the water pipes scaling.",
    sizes: ["1”", "1¼”"],
    properties: ["Rust Free", "Easy To Install", "100% No Welding"],
    grades: "SS 304",
    link: "jet-assemblies",
  },
  {
    id: 9,
    name: "Ferrule FC/NRV",
    imageUrl: product9,
    description:
      "FCV/NRV (Flow control & Non-Return Valve) is used to stop the reverse flow of water in FHTC (Functional household tap connection) & to prevent water theft. 'EAGLE´ FCV/NRV is certified by FCRI (Fluid Control Research Institute).",
    sizes: [],
    grades: "",
    properties: [
      "Stainless Steel SS 316, SS 304, SS 202",
      "CNC Machined",
      "Leak Proof",
      "Long Lasting",
    ],
    link: "ferrule-fcv-nrv",
  },
];

export {
  logo,
  logoWhite,
  HeroBG,
  ProductsBG,
  ObjectiveBG,
  discoverBG,
  ProductBG,
  productDetailsBG
};
