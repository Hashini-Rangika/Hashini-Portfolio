import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10'>
      <div className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
       

        {/* Desktop */}
        <div className='hidden md:flex gap-6'>
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-semibold"
                  : "text-gray-300 hover:text-cyan-400 transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile button */}
        <button className='md:hidden text-white' onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className='md:hidden bg-black/80 backdrop-blur-md border-t border-white/10'>
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-300 hover:text-cyan-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
