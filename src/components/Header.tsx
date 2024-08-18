import Link from "next/link";
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
  return (
    <header
      className="flex items-center justify-between h-14 border-b 
    border-white/20 px-3 sm:px-9 "
    >
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((route) => (
            <li key={route.name} className="text-white/50 hover:text-white">
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
