import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Search, Info, Menu, X } from "lucide-react";
import UserAvatar from "../components/UserAvatar";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-stone-400 text-red-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img className="w-1/6" src="/image/logo.png" alt="Logo" />

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-red-500" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 bg-stone-500 p-3 rounded-lg my-8 justify-center border border-red-500">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "SERVICES", path: "/services" },
              { name: "CAREERS", path: "/careers" },
              { name: "CONTACT", path: "/contact" },
            ].map((item) => (
              <li key={item.path} className="flex items-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `mx-5 grid hover:text-red-400 ${
                      isActive ? "text-red-300" : "text-red-500"
                    }`
                  }
                >
                  <b>{item.name}</b>
                </NavLink>
              </li>
            ))}
            <UserAvatar />
          </ul>
        </nav>

        {/* Desktop Icons */}
        <ul className="hidden md:flex space-x-4 rounded-lg">
          <li className="cursor-pointer p-3">
            <Search className="h-6 w-6 text-red-400" />
          </li>
          <li className="cursor-pointer p-3 bg-red-600 rounded-3xl hover:bg-red-500 transition">
            <Info className="h-6 w-6 text-red-500" />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="z-50 md:hidden absolute top-16 mt-2 left-0 w-full bg-stone-400 text-red-500 shadow-md">
          <nav>
            <ul className="flex flex-col space-y-3 p-3 rounded-lg border-t border-red-500">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT", path: "/about" },
                { name: "SERVICES", path: "/services" },
                { name: "CAREERS", path: "/careers" },
                { name: "CONTACT", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-center hover:text-red-400 ${
                        isActive ? "text-red-300" : "text-red-500"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    <b>{item.name}</b>
                  </NavLink>
                </li>
              ))}
              <UserAvatar />
            </ul>
          </nav>

          {/* Icons in Mobile Menu */}
          <ul className="flex justify-center space-x-4 my-4">
            <li className="cursor-pointer p-3">
              <Search className="h-6 w-6 text-red-400" />
            </li>
            <li className="cursor-pointer p-3 bg-red-600 rounded-3xl hover:bg-red-500 transition">
              <Info className="h-6 w-6 text-stone-400" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
