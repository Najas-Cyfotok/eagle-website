import { Link, useLocation } from "react-router-dom";
import { logo, logoWhite } from "../assets/asset";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenu,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
    products: [
      {
        name: "All Products",
        path: "/products",
      },
      {
        name: "Pipe Adapters",
        path: "/product/pipe-adapters",
      },
      {
        name: "Expander Bush",
        path: "/product/expander-bush",
      },
      {
        name: "Reducers",
        path: "/product/reducers",
      },
      {
        name: "Foot Valve",
        path: "/product/foot-valves",
      },
      {
        name: "Expanders",
        path: "/product/expanders",
      },
      {
        name: "Hose Nipple",
        path: "/product/hose-nipple",
      },
      {
        name: "Super Heavy Adapters",
        path: "/product/super-heavy-adapters",
      },
      {
        name: "Cast Iron Adapters",
        path: "/product/cast-iron-adapters",
      },
      {
        name: "Ferrule FCV/NRV",
        path: "/product/ferrule-fcv-nrv",
      },
      {
        name: "Pump Adapters",
        path: "/product/pump-adapters",
      },
      {
        name: "Reducer Bush",
        path: "/product/reducer-bush",
      },
      {
        name: "Rope Collar",
        path: "/product/rope-collar",
      },
    ],
  },
  {
    name: "Manufacturing Process",
    path: "/manufacturing-process",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Track scroll state
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClassNames = isScrolled
    ? "bg-white/50 bg-opacity-20 backdrop-blur-xl text-black"
    : "bg-black/30 text-white";

  return (
    <nav
      className={`flex justify-between items-center px-5 fixed w-full max-w-screen-2xl z-50 transition-colors duration-300 border-b border-b-gray-300/20  ${navClassNames}`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <img
          src={isScrolled ? logo : logoWhite}
          alt="logo"
          className="w-28 my-3"
        />
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6 text-sm max-md:hidden">
        {routes.map((route, index) =>
          route.name === "Products" ? (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="relative">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 gap-y-3 absolute mt-5 bg-white p-2 rounded-md w-[350px]">
                      {/* {route.products.map((component) => (
                  <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  >
                  {component.description}
                  </ListItem>
                  ))} */}
                      {route.products?.map((component, index) => (
                        <motion.li
                          animate={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          key={index}
                          className="text-black font-medium hover:text-orange-500 "
                        >
                          <Link to={component.path} className="mb-1">
                            {component.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <li
              key={index}
              className={`relative flex items-center ${
                location.pathname === route.path ? "font-bold" : ""
              } hover:text-orange-500 transition`}
            >
              {/* Link */}
              <Link to={route.path} className="mb-1">
                {route.name}
              </Link>

              {/* Active Link Animation */}
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

      <div className="hidden max-md:block">
        <AlignJustify
          className="h-6 w-6 cursor-pointer "
          onClick={() => setOpen(!open)}
        />
        {open && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              easings: [0.12, 0, 0.39, 0],
            }}
            className="absolute bg-orange-500 w-[200px] h-screen top-0 right-0 z-50"
            onClick={() => setOpen(!open)}
          >
            <X className="h-6 w-6 cursor-pointer absolute right-3 top-7 text-white" />
            <ul className="flex flex-col gap-y-6 text-lg h-full text-center font-semibold mt-20 overflow-x-hidden">
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
                  className="overflow-x-hidden "
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
