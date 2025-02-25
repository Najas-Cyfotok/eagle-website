import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo, logoWhite } from "../assets/asset";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

const routes = [
  { name: "Home", path: "/" },
  {
    name: "Products",
    path: "/products",
    products: [
      { name: "All Products", path: "/products" },
      { name: "Hose Nipples (Stainless Steel)", path: "/product/hose-nipple" },
      { name: "Pipe Adapters (SS 304/CI)", path: "/product/pipe-adapters" },
      { name: "Hose Collars (Stainless Steel)", path: "/product/hose-collar" },
      { name: "Pump Adapters (SS 304)", path: "/product/pump-adapters" },
      { name: "Reducer Bush (SS 304)", path: "/product/reducer-bush" },
      { name: "Reducers (SS 304)", path: "/product/reducers" },
      { name: "Expander Bush (SS 304)", path: "/product/expander-bush" },
      { name: "Expanders (SS 304)", path: "/product/expanders" },
      { name: "Foot Valve (SS 304)", path: "/product/foot-valves" },
      {
        name: "Super Heavy Adapters (SS 304)",
        path: "/product/super-heavy-adapters",
      },
      { name: "Jet Assembly (SS 304)", path: "/product/jet-assembly" },
      { name: "Cast Iron Adapters (CI)", path: "/product/cast-iron-adapters" },

      {
        name: "Ferrule FCV/NRV (SS 202/SS 304/SS 316)",
        path: "/product/ferrule-fcv-nrv",
      },
      { name: "Rope Collars (SS 304)", path: "/product/rope-collar" },
      { name: "NRV (SS 304, Cast iron)", path: "/product/nrv" },
    ],
  },
  { name: "Manufacturing Process", path: "/manufacturing-process" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInProducts, setIsInProducts] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll state
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  // Observe "Our Products" section
  useEffect(() => {
    const section = document.getElementById("products");
    const observer = new IntersectionObserver(
      ([entry]) => setIsInProducts(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClassNames = isScrolled
    ? isInProducts
      ? "bg-transparent text-white"
      : "bg-white/50 bg-opacity-20 backdrop-blur-xl text-black"
    : "bg-black/30 text-white";

  return (
    <nav
      className={`flex justify-between items-center px-5 fixed w-full max-w-screen-2xl z-50 transition-colors duration-300 border-b border-b-gray-300/20 ${navClassNames}`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <img
          src={isScrolled && !isInProducts ? logo : logoWhite}
          alt="logo"
          className="w-28 my-3"
        />
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6 text-sm max-md:hidden">
        {routes.map((route, index) =>
          route.products ? (
            <li
              key={index}
              className="relative group"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <span className="cursor-pointer hover:text-orange-500">
                {route.name}
              </span>
              {openDropdown && (
                <ul className="absolute left-0 mt-2 p-3 bg-white rounded shadow-lg text-black grid grid-cols-2 gap-2 w-[350px]">
                  {route.products.map((product, i) => (
                    <li key={i} className="hover:text-orange-500">
                      <Link to={product.path}>{product.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li
              key={index}
              className={`relative flex items-center ${
                location.pathname === route.path ? "font-bold" : ""
              } hover:text-orange-500 transition`}
            >
              <Link to={route.path} className="mb-1">
                {route.name}
              </Link>
              {location.pathname === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-orange-500 h-1 w-full absolute bottom-0 rounded-2xl"
                />
              )}
            </li>
          )
        )}
      </ul>

      {/* Mobile Menu */}
      <div className="hidden max-md:block">
        <AlignJustify
          className="h-6 w-6 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        {mobileMenuOpen && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              easings: [0.12, 0, 0.39, 0],
            }}
            className="absolute bg-orange-500 w-[200px] h-screen top-0 right-0 z-50"
          >
            <X
              className="h-6 w-6 cursor-pointer absolute right-3 top-7 text-white"
              onClick={() => setMobileMenuOpen(false)}
            />
            <ul className="flex flex-col gap-y-6 text-lg h-full text-center font-semibold mt-20">
              {routes.map((route, index) => (
                <motion.li
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeInOut",
                    easings: [0.12, 0, 0.39, 0],
                  }}
                  key={index}
                >
                  <Link to={route.path}>{route.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;
