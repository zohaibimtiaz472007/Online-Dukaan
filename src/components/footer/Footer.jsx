import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-wrap justify-between">
                    {/* Company Info */}
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                        <h2 className="text-lg font-semibold mb-4">E-Shop</h2>
                        <p className="text-gray-400">Your one-stop shop for all the latest products. Shop now and enjoy exclusive deals!</p>
                    </div>

                    {/* Customer Service */}
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                        <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
                        <ul>
                            <li className="mb-2"><Link to="/contact" className="hover:underline hover:text-red-500">Contact Us</Link></li>
                            <li className="mb-2"><Link to="/faq" className="hover:underline hover:text-red-500">FAQ</Link></li>
                            <li className="mb-2"><Link to="/return" className="hover:underline hover:text-red-500">Returns</Link></li>
                            <li className="mb-2"><Link to="/shippingInfo" className="hover:underline hover:text-red-500">Shipping Info</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul>
                            <li className="mb-2"><Link to="/" className="hover:underline hover:text-red-500">Home</Link></li>
                            <li className="mb-2"><Link to="/shop" className="hover:underline hover:text-red-500">Shop</Link></li>
                            <li className="mb-2"><Link to="/about" className="hover:underline hover:text-red-500">About Us</Link></li>
                            <li className="mb-2"><Link to="/privacy" className="hover:underline hover:text-red-500">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M22.675 0H1.325C.594 0 0 .593 0 1.324v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.21h3.128V8.745c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.919.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.495h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.324V1.325C24 .594 23.407 0 22.675 0z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M23.954 4.569c-.885.39-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.95.56-2.005.965-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.045.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.425.722-.666 1.56-.666 2.457 0 1.697.866 3.194 2.188 4.074-.803-.026-1.56-.248-2.223-.617v.062c0 2.372 1.684 4.348 3.918 4.798-.41.111-.84.171-1.285.171-.314 0-.615-.03-.916-.085.617 1.924 2.407 3.322 4.526 3.362-1.66 1.304-3.757 2.082-6.038 2.082-.39 0-.779-.023-1.17-.067 2.158 1.387 4.719 2.197 7.478 2.197 8.977 0 13.886-7.436 13.886-13.886 0-.21-.006-.42-.016-.63.952-.689 1.775-1.548 2.43-2.534z"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.304.975.975 1.242 2.241 1.304 3.607.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.062 1.366-.33 2.632-1.304 3.607-.975.975-2.242 1.242-3.608 1.304-1.266.058-1.646.07-4.85.07s-3.584-.012-4.851-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.242-2.241-1.304-3.607C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.851c.062-1.366.33-2.632 1.304-3.607.975-.975 2.242-1.242 3.608-1.304C8.417 2.175 8.797 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.053.072 5.73.131 4.425.373 3.275 1.523 2.125 2.675 1.883 3.981 1.823 5.304.762 8.332.75 8.741.75 12s.012 3.668.072 4.947c.06 1.323.302 2.629 1.452 3.78 1.15 1.15 2.456 1.392 3.78 1.452 1.279.059 1.688.072 4.947.072s3.668-.013 4.947-.072c1.324-.06 2.629-.302 3.78-1.452 1.15-1.15 1.392-2.456 1.452-3.78.059-1.279.072-1.688.072-4.947s-.013-3.668-.072-4.947c-.06-1.324-.302-2.629-1.452-3.78-1.15-1.15-2.456-1.392-3.78-1.452C15.668.013 15.259 0 12 0z"/>
                                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-10.845c-.796 0-1.44.644-1.44 1.44 0 .797.644 1.441 1.44 1.441.797 0 1.441-.644 1.441-1.441 0-.796-.644-1.44-1.441-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400">&copy; 2024 E-Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
