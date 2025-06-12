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
        <header className='fixed top-4 left-0 w-full z-50 px-4 md:px-16 lg:px-28'>
            <div
                className={`w-full flex items-center justify-between py-4
                ${scrolled ? 'bg-emerald-400/10 backdrop-blur-md rounded-2xl px-6' : 'bg-transparent'}
                text-gray-400 transition-all duration-300`}
            >
                {/* Logo */}
                <div className="text-3xl font-bold text-emerald-400">
                    <h1>Biccas</h1>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-8 list-none text-base font-normal">
                    <li className="cursor-pointer hover:text-black transition">Home</li>
                    <li className="cursor-pointer hover:text-black transition">Product</li>
                    <li className="cursor-pointer hover:text-black transition">FAQ</li>
                    <li className="cursor-pointer hover:text-black transition">Blog</li>
                    <li className="cursor-pointer hover:text-black transition">About Us</li>
                </ul>

                {/* Shopping Bag Icon */}
                <div className="text-base cursor-pointer flex justify-center gap-4">
                    <button>Login</button>
                    <button className='bg-emerald-400 rounded-lg px-4 py-2 text-white'>SignUp</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
