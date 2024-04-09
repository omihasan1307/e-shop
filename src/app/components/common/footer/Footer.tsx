import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto mt-5">
        <footer className="text-gray-700  pt-8">
          <div className=" px-2 md:px-8 mx-auto flex flex-wrap justify-between">
            <div className="text-left md:text-center  lg:w-1/4 mb-8 lg:mb-0">
              <h2 className="text-3xl font-semibold mb-4 pb-4 md:mt-8">
                ESHOP
              </h2>
              <ul className="list-none">
                <li className="mb-2">
                  <p className="text-sm text-gray-400 md:px-6 leading-7	">
                    Eshop is a Premium Ecommerce Site. Best choice for your
                    online store. Let purchase it to enjoy now
                  </p>
                </li>
                <li className="text-left md:flex items-center justify-center">
                  <span className="mr-2">Social:</span>
                  <span>
                    <a
                      href="/"
                      className="hover:text-gray-400 transition-colors duration-300 mr-2 "
                    >
                      <FontAwesomeIcon icon={faFacebook} className="w-5" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="/"
                      className="hover:text-gray-400 transition-colors duration-300 mr-2 "
                    >
                      <FontAwesomeIcon icon={faTwitter} className="w-5" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="/"
                      className="hover:text-gray-400 transition-colors duration-300 mr-2 "
                    >
                      <FontAwesomeIcon icon={faYahoo} className="w-5" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="/"
                      className="hover:text-gray-400 transition-colors duration-300 mr-2 "
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-5" />
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/5 mt-8 md:mb-8 lg:mb-0 pl-2 md:pl-12">
              <h2 className="text-lg font-semibold mb-4 border-b-2 border-gray-600 pb-2 w-fit">
                Products
              </h2>
              <ul className="list-none  text-sm text-gray-500 py-4">
                <li className="mb-2">
                  <a
                    href="/"
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    About us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/"
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    Delivery information
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/"
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    Terms & Conditions
                  </a>
                </li>{" "}
                <li className="mb-2">
                  <a
                    href="/"
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>{" "}
                <li className="mb-2">
                  <a
                    href="/"
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    Returns & Refunds
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/5 mt-8 md:mb-8 lg:mb-0 pl-2 md:pl-12">
              <h2 className="text-lg font-semibold mb-4 border-b-2 border-gray-600 pb-2 w-fit">
                Customer Service
              </h2>
              <ul className="list-none  text-sm text-gray-500 py-4">
                <li className="mb-2">
                  <a
                    href="/"
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    My account
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/"
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    Order History
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/"
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    Wish List
                  </a>
                </li>{" "}
                <li className="mb-2">
                  <a
                    href="/"
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    Newsletter
                  </a>
                </li>{" "}
                <li className="mb-2">
                  <a
                    href="/"
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/4  ml-2 md:ml-8 ">
              <h2 className="text-lg font-semibold mb-4 mt-8 border-b-2 border-gray-600 pb-2 w-fit">
                Newsletter
              </h2>
              <p className=" text-sm text-gray-500 py-4">
                Sign up to receive updates on new arrivals and special offers.
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 w-40 md:w-auto rounded-l-lg text-sm border-t-2 border-b-2 border-l-2 border-gray-500"
                />
                <button
                  type="submit"
                  className="bg-gray-600 text-white px-4 py-2 text-sm rounded-r-lg border-t-2 border-b-2 border-r-2 border-gray-500 hover:bg-gray-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="container mx-auto text-center mt-8"></div>
          <p className=" text-center text-sm font-bold mb-2 mt-8">
            &copy; 2024 ESHOP. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
