import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // State to keep track of cart count

  // Function to update cart count
  const updateCartCount = () => {
    // Example function to increment cart count
    setCartCount(cartCount + 1);
  };

  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };
  const cartItems = useSelector((state) => state.cart);


  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">E-Shop</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                >
                  Home
                </Link>
                <Link
                  to="/allproduct"
                  className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                >
                  Shop
                </Link>
                {!user ? (
                  <Link
                    to="/signup"
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                  >
                    SignUp
                  </Link>
                ) : (
                  ""
                )}

                {!user ? (
                  <Link
                    to="/login"
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                  >
                    Login
                  </Link>
                ) : (
                  ""
                )}

                {user?.role === "user" && (
                  <Link
                    to="/user-dashboard"
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                  >
                    User
                  </Link>
                )}

                {user?.role === "admin" && (
                  <Link
                    to="/admin-dashboard"
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                  >
                    Admin
                  </Link>
                )}
                {user && (
                  <Link
                    onClick={logout}
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                  >
                    logout
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500 flex items-center"
            >
              <IoIosCart size={40} /> {/* Increase size of cart icon */}
              <span className="ml-1 text-xl"></span>{" "}
              {/* Cart count display */}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-600 md:hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-gray-900 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/allproduct"
                className="text-gray-900 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Shop
              </Link>
              {!user ? (
                  <Link
                    to="/signup"
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                  >
                    SignUp
                  </Link>
                ) : (
                  ""
                )}
               {user?.role === "user" && (
                  <Link
                    to="/user-dashboard"
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                  >
                    User
                  </Link>
                )}
              {user?.role === "admin" && (
                  <Link
                    to="/admin-dashboard"
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                  >
                    Admin
                  </Link>
                )}
                {!user ? (
                  <Link
                    to="/login"
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                  >
                    Login
                  </Link>
                ) : (
                  ""
                )}
                 {user && (
                  <Link
                    onClick={logout}
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-4 hover:text-red-500"
                  >
                    logout
                  </Link>
                )}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
