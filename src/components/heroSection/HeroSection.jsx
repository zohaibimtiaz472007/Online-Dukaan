import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <>
    
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
         <motion.h1 
           className="text-5xl md:text-6xl font-bold mb-4"
           initial={{ opacity: 0, y: -50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
         >
           Welcome to E-Shop
         </motion.h1>
         <motion.p 
           className="text-lg md:text-xl mb-8"
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
        >
           Your one-stop shop for all the latest products. Shop now and enjoy exclusive deals!
         </motion.p>
         <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 1 }}
         >
           <Link to="/allproduct" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300">
             Shop Now
           </Link>
    /    </motion.div>
       </div>
     </div> 
    </>
  );
};

export default HeroSection;
