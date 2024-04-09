import NavbarIcons from "./NavbarIcons";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  // const items=[]

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-10 lg:px-0  sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold uppercase">
            <span className="text-baseTextColor">E</span>
            Shop
          </h1>
        </div>
        <div className="hidden lg:block">
          <NavbarItems />
        </div>
        <div>
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
