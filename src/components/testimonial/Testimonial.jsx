/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className="text-center text-3xl font-bold text-black">Testimonial</h1>
                    {/* para  */}
                    <h2 className="text-center text-2xl font-semibold mb-10">
                        What our <span className="text-pink-500">customers</span> are saying
                    </h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center glass-card">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://scontent.fmfg1-1.fna.fbcdn.net/v/t39.30808-6/448684946_1017322966658797_2075973619687684508_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFZbu4Iv14xFnY68dss8-jI6ueOu4jS143q5467iNLXjSe_22zMSzRH38kwWEj8Iu0lzaJgOcaiYVT2iMP9OaOW&_nc_ohc=vlZVYI7kD3wQ7kNvgG8Mcu5&_nc_ht=scontent.fmfg1-1.fna&oh=00_AYAvLf0paD_FudrvdRmiGMs7VIeOswfgBkqyLjJ4TaG8Pw&oe=66801A5E"
                                />
                                <p className="leading-relaxed">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                                    Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                    Zohaib Imtiaz
                                </h2>
                                <p className="text-gray-500">MERN Stack Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center glass-card">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://www.devknus.com/img/gawri.png"
                                />
                                <p className="leading-relaxed">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                                    Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">S Maham</h2>
                                <p className="text-gray-500">Designer</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center glass-card">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://scontent.fmfg1-1.fna.fbcdn.net/v/t39.30808-6/415743724_891284292492962_375350524967789131_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHfMV0iexajHbHeBGJ1EUItLKLtbzNhrK4sou1vM2GsrmUVJ7iCCg4zDSYZ4LkHlSrxy99K0K0j3UZtGbsIFmur&_nc_ohc=wkCJgMkOHHQQ7kNvgHkuWHC&_nc_ht=scontent.fmfg1-1.fna&oh=00_AYBgw9x-cu33aXXT1L94Pmk3yy8t2iAcYdRr2P-AiNiHTQ&oe=6680245B"
                                />
                                <p className="leading-relaxed">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                                    Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Shoaib Imtiaz</h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
