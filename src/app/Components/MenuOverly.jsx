import React from 'react'
import NavLink from './NavLinks'
import { motion } from "framer-motion";

const MenuOverly = ({ Links }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {Links.map((link, index) => (
                <motion.li
                    key={index}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.85 }}
                >
                    <NavLink href={link.path} title={link.title} />
                </motion.li>
            ))}
        </ul>
    )
}

export default MenuOverly