import React, { useEffect, useState } from 'react';
import Logo from "../assets/Logo.png"
function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className='fixed top-4 left-0 w-full z-50 px-4 md:px-16 lg:px-28'>
            <div
                className={`w-full flex items-center justify-between py-4
                ${scrolled ? 'bg-grey-400/30 backdrop-blur-md rounded-2xl px-6' : 'bg-transparent'}
                text-gray-900 transition-all duration-300`}
            >
                {/* Logo */}
                <div >
                    <img src={Logo} alt="" className="h-6 md:h-8" />
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-8 list-none text-base font-normal ">
                    <li className="cursor-pointer hover:text-black transition">Destination</li>
                    <li className="cursor-pointer hover:text-black transition">Hotels</li>
                    <li className="cursor-pointer hover:text-black transition">Flights</li>
                    <li className="cursor-pointer hover:text-black transition">Bookings</li>
                </ul>

                {/* Shopping Bag Icon */}
                <div className="text-base cursor-pointer flex justify-center gap-4">
                    <button>Login</button>
                    <button className='border border-black rounded-lg px-4 py-1 '>SignUp</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
