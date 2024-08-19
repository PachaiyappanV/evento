"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/events/all",
    name: "All Events",
  },
];
const Header = () => {
  const activePathName = usePathname();
  return (
    <header
      className="flex items-center justify-between h-14 border-b 
    border-white/20 px-3 sm:px-9 "
    >
      <Logo />
      <nav className=" h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routes.map((route) => (
            <li
              key={route.name}
              className={`${
                activePathName === route.path ? "text-white" : "text-white/50"
              } hover:text-white flex items-center relative`}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePathName === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="h-1 w-full bg-accent absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
