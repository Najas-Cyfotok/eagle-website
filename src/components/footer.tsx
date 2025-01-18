import { logo } from "@/assets/asset";
import { EnduratekLogo } from "@/assets/asset";
import { skanthalogo } from "@/assets/asset";
import { cepllogo } from "@/assets/asset";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="mt-10 parallax">
      <footer className="min-h-[300px] bg-[#fff6ed]">
        <h3 className="text-3xl text-center font-bold pt-6">
          Our Authorized Distributors{" "}
        </h3>
        <div className="flex flex-wrap justify-evenly gap-10 my-1 max-sm:flex-col max-sm:items-center">
          <img src={cepllogo} className="w-24 h-24 sm:w-32 sm:h-32" />
          <img
            src={EnduratekLogo}
            className="w-full  h-32 sm:w-36 sm:h-36 scale-150 max-sm:w-auto"
          />
          <img src={skanthalogo} className="w-24 h-24 sm:w-36 sm:h-36 pl-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 px-36 max-lg:px-5 py-10  gap-y-6 justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col ">
              <img src={logo} alt="logo" className="w-32 mt-3" />
              <ul className="flex items-center gap-x-2 mt-2">
                {socialLinks.map((item, index) => (
                  <Link to={item.link} key={index}>
                    <li className="bg-white rounded-full p-2">{item.icon}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h2 className="text-lg font-bold mb-4">Quick Links</h2>
              <ul className="flex flex-col gap-y-2">
                {links.map((item, index) => (
                  <Link to={item.link} key={index}>
                    <li className="text-xs hover:text-orange-600">
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className=" flex justify-center items-left sm:ml-10 lg:ml-28">
            <div>
              <h2 className="text-lg font-bold mb-4 ">Contact</h2>
              <ul className="flex flex-col gap-y-2 ">
                {contact.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="text-xs">{item.icon}</span>
                    <span className="text-xs">
                      <Link to={`tel:${item.contact}`} target="_blank">
                        {item.contact}
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <div>
            <h2 className="text-lg font-bold mb-4">Our Authorized Dealers</h2>
            <ul className="flex flex-col gap-y-2">
              {dealers.map((item, index) => (
                <li key={index} className="flex items-center gap-x-2">
                  <span className="text-xs">{item.name}</span>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <hr className="max-w-screen-xl mx-auto" />
        <div className="flex items-center justify-between px-36 max-lg:px-5 py-5 max-md:flex-col-reverse max-md:text-center">
          <p className="text-xs">
            © 2024 Eagle Pipe Fittings & Valves. All rights reserved.
          </p>
          <p className="text-xs ">
            All Rights Reserved | Terms and Conditions | Privacy Policy
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

export const socialLinks = [
  {
    name: "linkedin",
    icon: <Linkedin />,
    link: "https://www.linkedin.com/company/eagle-pipe-fittings-and-valves/",
  },
  {
    name: "facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/eaglepipefittingsandvalves?mibextid=ZbWKwL",
  },
  {
    name: "instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/eaglepipefittings_valves/?igsh=cXAwN2IzdnVmZXh4",
  },
];

export const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const contact = [
  {
    name: "mail",
    contact: "info@epfv.in",
    icon: <Mail />,
  },
  {
    name: "phone",
    contact: "+91 7395889922,+91 7395889922",
    icon: <Phone />,
  },
  {
    name: "location",
    contact: `No: 23, Lakshmi Nagar,
Vadavalli Road, Edayarpalayam,
Coimbatore 641025`,
    icon: <MapPin />,
  },
];

export const dealers = [
  {
    name: "Centroid engineers",
  },
  {
    name: "Skanthaa syndicate",
  },
  {
    name: "Enduratek",
  },
];
