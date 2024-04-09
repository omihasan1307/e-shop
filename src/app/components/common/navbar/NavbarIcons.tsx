"use client";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import CartBar from "../../cart-bar/CartBar";
import NavbarItems from "./NavbarItems";

const NavbarIcons = () => {
  const cartRef = useRef<any>(null);
  const navItemsRef = useRef<any>(null);
  const loginRef = useRef<any>(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowLogin(false); // Close login button when sidebar is toggled
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        (showSidebar &&
          !event.target.closest(".cart-icon") &&
          !cartRef.current.contains(event.target)) || // Close sidebar if click outside of it
        (showLogin &&
          !event.target.closest(".login-button") &&
          !loginRef.current.contains(event.target)) || // Close login button if click outside of it
        (showNavbar &&
          !event.target.closest(".navbar-button") &&
          !navItemsRef.current.contains(event.target)) // Close login button if click outside of it
      ) {
        setShowNavbar(false);
        setShowSidebar(false);
        setShowLogin(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showSidebar, showLogin, showNavbar]);

  return (
    <div className="space-x-2">
      <button onClick={toggleSidebar} className="relative">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="lg:border px-4 lg:px-6 py-5 h-4 hover:bg-gray-100 duration-300 hover:duration-300"
        />
      </button>
      <button
        ref={loginRef}
        onClick={() => setShowLogin(!showLogin)}
        className="relative login-button"
      >
        <FontAwesomeIcon
          icon={faUser}
          className="lg:border px-4 lg:px-6 py-5 h-4 hover:bg-gray-100 duration-300 hover:duration-300"
        />
      </button>
      <button
        className="relative navbar-button"
        onClick={() => setShowNavbar(!showNavbar)}
      >
        <FontAwesomeIcon
          icon={faBars}
          className=" lg:hidden px-4 lg:px-6 py-5 h-4 hover:bg-gray-100 duration-300 hover:duration-300"
        />
      </button>
      {showLogin && (
        <div className="border py-2 rounded-lg text-center w-24 absolute right-1 bg-white">
          Login
        </div>
      )}
      {showSidebar && (
        <>
          {/* Semi-transparent gray background */}
          <div className="fixed inset-0 bg-white backdrop-filter backdrop-blur-lg opacity-50 z-40"></div>
          {/* Cart bar */}
          <div ref={cartRef} className="fixed top-0 right-0 z-50">
            <CartBar />
          </div>
        </>
      )}
      {showNavbar && (
        <>
          {/* Semi-transparent gray background */}
          <div className="fixed inset-0 bg-white backdrop-filter backdrop-blur-lg opacity-50 z-40"></div>
          {/* Cart bar */}
          <div ref={navItemsRef} className="fixed top-0 right-0 z-50">
            <NavbarItems showNavbar={showNavbar} />
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarIcons;
