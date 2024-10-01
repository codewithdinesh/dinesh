"use client";
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false); // Track navbar toggle state for mobile

    return (
        <div>

            {/* Navbar */}
            <nav className=" text-green-500 p-4 left-4 w-full top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">

                    {/* Navbar Links */}
                    <div className=" hidden md:flex space-x-6  justify-center justify-items-center">
                        <Link href="#projects">
                            <p className="hover:text-white">Projects</p>
                        </Link>
                        <Link href="#about">
                            <p className="hover:text-white">About</p>
                        </Link>
                        <Link href="#contact">
                            <p className="hover:text-white">Contact</p>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            className="text-green-500 focus:outline-none"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {navbarOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {navbarOpen && (
                    <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
                        <Link href="#projects">
                            <p onClick={() => setNavbarOpen(false)} className="hover:text-white">Projects</p>
                        </Link>
                        <Link href="#about">
                            <p onClick={() => setNavbarOpen(false)} className="hover:text-white">About</p>
                        </Link>
                        <Link href="#contact">
                            <p onClick={() => setNavbarOpen(false)} className="hover:text-white">Contact</p>
                        </Link>
                    </div>
                )}
            </nav>
        </div>

    )
}

export default Navbar