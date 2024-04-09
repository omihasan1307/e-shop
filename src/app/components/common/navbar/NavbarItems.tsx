"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItems = ({ showNavbar }: any) => {
  const pathname = usePathname();

  const nav_links = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Shop",
      path: "/products",
    },
    {
      display: "Cart",
      path: "/cart",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div>
      {!showNavbar ? (
        <div className="flex items-center space-x-10 font-semibold ">
          {nav_links?.map((items, index) => (
            <div key={index}>
              <Link
                className={`cursor-pointer hover:text-baseTextColor scale-105 duration-150 hover:duration-150
               ${
                 pathname == items.path
                   ? "bg-baseBgColor text-white px-2 py-2 rounded hover:text-black scale-105 duration-150 hover:duration-150"
                   : ""
               }`}
                href={items.path}
              >
                {items.display}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[20rem] h-screen border bg-white px-10 py-5 ">
          <div className="flex flex-col items-center space-y-5 font-semibold  ">
            {nav_links?.map((items, index) => (
              <div key={index}>
                <Link
                  className={`cursor-pointer hover:text-baseTextColor scale-105 duration-150 hover:duration-150
               ${
                 pathname == items.path
                   ? "bg-baseBgColor text-white px-2 py-2 rounded hover:text-black scale-105 duration-150 hover:duration-150"
                   : ""
               }`}
                  href={items.path}
                >
                  {items.display}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarItems;
