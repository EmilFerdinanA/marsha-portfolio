import { NavLink, useLocation } from "react-router";

const navItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Me",
    url: "/about",
  },
  {
    label: "Experiences",
    url: "/experiences",
  },
  {
    label: "Personal Project",
    url: "/projects",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className="w-full bg-white border-b shadow border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between md:justify-center">
        <span className="md:hidden font-semibold tracking-tight text-[#6D28D9]">
          Annisa Marsha
        </span>

        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => {
            return (
              <NavLink
                to={item.url}
                key={item.url}
                className={`relative py-2 text-[15px] font-medium transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:ring-offset-4 rounded ${
                  location.pathname === item.url
                    ? "text-[#6D28D9] scale-105"
                    : "text-gray-500 hover:text-[#6D28D9] active:scale-95"
                }`}
              >
                {item.label}
                {location.pathname === item.url && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6D28D9] transform origin-left transition-transform duration-300" />
                )}
              </NavLink>
            );
          })}
        </div>

        <div className="md:hidden flex space-x-2">
          <select
            value={"Contact"}
            className="bg-gray-50 border border-gray-200 text-sm rounded-lg p-2 focus:ring-[#6D28D9] focus:border-[#6D28D9] outline-none"
          >
            {navItems.map((item) => (
              <option key={item.url} value={item.url}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
