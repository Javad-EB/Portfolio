"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Navlink from './Navlink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion";
import MenuOverly from './MenuOverly';
import Logo from '../../../public/logo.svg'
import Image from 'next/image'

const NavLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <section className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="w-12 h-12">
                    <Image
                        src={Logo}
                        alt='Logo Icon'
                    />
                </Link>
                <article className="mobile-menu block md:hidden ">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </article>
                <article className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {
                            NavLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.3 }}
                                    whileTap={{ scale: 0.85 }}
                                >
                                    <Navlink href={link.path} title={link.title} />
                                </motion.li>
                            ))
                        }
                    </ul>
                </article>
            </section>
            {navbarOpen ? <MenuOverly Links={NavLinks} /> : null}
        </nav>
    )
}

export default Navbar