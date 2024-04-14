import Link from "next/link";
import NavbarIcons from "./NavbarIcons";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <div className=" py-5 px-5 lg:px-0 sticky top-0 left-0 z-50 bg-white">
      <div className="  max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between ">
          <div>
            <Link href={'/'} className="text-2xl font-bold uppercase">
              <span className="text-baseTextColor">E</span>
              Shop
            </Link>
          </div>
          <div className="hidden lg:block">
            <NavbarItems />
          </div>
          <div>
            <NavbarIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
