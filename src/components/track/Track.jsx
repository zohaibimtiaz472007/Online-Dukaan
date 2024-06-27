import React from 'react';
import { motion } from 'framer-motion';

const tracks = [
    {
        title: 'Premium Tshirts',
        description: 'Our T-Shirts are 100% made of cotton.',
        icon: (
            <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        )
    },
    {
        title: 'Stylish Jackets',
        description: 'Stay warm and stylish with our range of jackets.',
        icon: (
            <svg className="text-blue-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 1.75L6.5 6.25V9.5L3 12.75V15.5H21V12.75L17.5 9.5V6.25L12 1.75ZM12 4.5L15.5 7.75H8.5L12 4.5ZM6.5 11.5V14.25H17.5V11.5H6.5ZM8.5 11.5H10.25V13.5H8.5V11.5ZM13.75 11.5H15.5V13.5H13.75V11.5Z" />
            </svg>
        )
    },
    {
        title: 'Latest Gadgets',
        description: 'Find the latest and greatest in tech.',
        icon: (
            <svg className="text-green-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        )
    }
];

const Track = () => {
    return (
        <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-10">
            <div className="container mx-auto px-5 py-10 md:py-14">
                {/* Main */}
                <div className="flex flex-wrap -m-4 text-center">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            className="p-4 md:w-1/3 sm:w-1/2 w-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg hover:shadow-2xl px-4 py-6 rounded-lg transition-all duration-300">
                                {track.icon}
                                <h2 className="title-font font-medium text-lg">{track.title}</h2>
                                <p className="leading-relaxed">{track.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Track;
