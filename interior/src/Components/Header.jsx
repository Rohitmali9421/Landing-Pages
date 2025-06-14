import React, { useEffect, useState } from 'react';
import { HiShoppingBag } from "react-icons/hi2";

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
        <header className='fixed top-4 left-0 w-full z-50 px-4 md:px-16 lg:px-36'>
            <div
                className={`w-full flex items-center justify-between py-4
                ${scrolled ? 'bg-gray-800/20 backdrop-blur-md rounded-2xl px-4' : 'bg-transparent'}
                text-white transition-all duration-300`}
            >
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <h1>Panto</h1>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-8 list-none text-sm font-medium">
                    <li className="cursor-pointer hover:text-orange-400 transition">Furniture</li>
                    <li className="cursor-pointer hover:text-orange-400 transition">Shop</li>
                    <li className="cursor-pointer hover:text-orange-400 transition">About Us</li>
                    <li className="cursor-pointer hover:text-orange-400 transition">Contact</li>
                </ul>

                {/* Shopping Bag Icon */}
                <div className="text-2xl cursor-pointer">
                    <HiShoppingBag />
                </div>
            </div>
        </header>
    );
}

export default Header;
