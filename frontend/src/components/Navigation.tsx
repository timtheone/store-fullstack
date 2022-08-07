import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";

type NavigationProps = {
  navigationData: Array<{ path: string; label: string }>;
};

const Navigation = ({ navigationData }: NavigationProps) => {
  return (
    <>
      <nav className="flex gap-8 sm:gap-28 py-4 px-5 border-b sticky top-0 z-40 w-full bg-white place-content-center">
        {navigationData.map((navItem, index) => (
          <NavLink
            key={index}
            to={navItem.path}
            className={({ isActive }) => {
              return classNames(
                "transition-colors ease-in-out duration-500 font-bold text-xl",
                {
                  "text-blue-600": isActive,
                  "border-b-2 pb-1 border-blue-600": isActive,
                  " text-neutral-700": !isActive,
                }
              );
            }}
          >
            {navItem.label}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
