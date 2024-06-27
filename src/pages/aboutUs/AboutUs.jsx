import React from 'react';
import { Transition } from '@headlessui/react';

const AboutUsPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-8 py-12 md:py-24 rounded-lg shadow-lg bg-white overflow-hidden relative">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16">
          <svg
            className="h-32 w-32 text-gray-200 opacity-25"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <img
              src="https://scontent.fmfg1-1.fna.fbcdn.net/v/t39.30808-6/448684946_1017322966658797_2075973619687684508_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFZbu4Iv14xFnY68dss8-jI6ueOu4jS143q5467iNLXjSe_22zMSzRH38kwWEj8Iu0lzaJgOcaiYVT2iMP9OaOW&_nc_ohc=6hfOVCWeC34Q7kNvgFMWGBo&_nc_ht=scontent.fmfg1-1.fna&oh=00_AYCBSM-8Q2-xmdANi3PUDwAn2Umy5mJ-AFBR6MZknK-zEw&oe=6682F59E"  
              alt="About Us Image"
              className="rounded-full h-40 w-40 object-cover border-4 border-white shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Welcome to E-Shop
          </h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            Your premier destination for quality products and exceptional shopping experiences.
          </p>
          <p className="text-lg text-gray-700 text-center">
            E-Shop is committed to providing you with the best selection of products combined with
            outstanding customer service. We strive to create a seamless shopping experience that
            exceeds your expectations.
          </p>
        </div>

        {/* Animated element */}
        <Transition
          show={isOpen}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16">
            <svg
              className="h-32 w-32 text-gray-200 opacity-25 transform rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default AboutUsPage;
