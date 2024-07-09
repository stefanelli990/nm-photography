import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

const transitionProps = {
    type: 'spring',
    stiffness: 70,
    damping: 15,
    duration: 0.2,
};

const menuVariants = {
    open: {
        right: '0',
        transition: transitionProps
    },
    closed: {
        right: '-320px',
        transition: transitionProps,
      
    }
}

const variantsOverlay = {
    open: {
        opacity: 1,
        visibility: 'visible',
        transition: transitionProps
    },
    closed: {
        opacity: 0,
        visibility: 'hidden',
        transition: transitionProps
    }
}

const navLinksVariants = {
    open: {
        transition: {
            staggerChildren: 0.2, 
            delayChildren: 0.4,   
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: 0, 
        },
    },
};

const navLinkVariants = {
    open: {
        opacity: 1,
        x: 0,
        transition: { type: 'tween'  },
    },
    closed: {
        opacity: 0,
        x: 40,
        transition: { type: 'tween'  },
    },
};

export default function Menu({ open, setOpen }) {
    const location = useLocation();

    const navLinks = [
        {name: 'Home', url: '/'},
        {name: 'Portfolio', url: '/portfolio'},
        {name: 'About', url: '/about'},
        {name: 'Contact', url: '/contact'},
    ]

  return (
    <>
        <motion.div animate={open ? 'open' : 'closed'} variants={variantsOverlay} className="bg-black/50 fixed inset-0 invisible h-full w-full z-10" onClick={() => setOpen(false)}></motion.div>
        <motion.div animate={open ? 'open' : 'closed'} variants={menuVariants} className="bg-white fixed top-0 -right-80 h-full flex items-center justify-center z-10 w-80">
            <button onClick={() => setOpen(false)} className="h-8 w-8 absolute text-3xl top-8 right-8 duration-500 hover:rotate-90 hover:scale-[.75] " aria-label="Close menu">
                <div className="bg-black w-8 h-[0.1rem] rotate-45 relative top-[1px]"></div>
                <div className="bg-black w-8 h-[0.1rem] -rotate-45"></div>
            </button>
            <motion.ul animate={open ? 'open' : 'closed'} variants={navLinksVariants} className="space-y-8 text-xl">
                {navLinks.map((navLink, index) => (
                    <motion.li key={index} variants={navLinkVariants} className="group relative uppercase">
                        <Link to={navLink.url} onClick={() => setOpen(false)}>{navLink.name}</Link>
                        {location.pathname === navLink.url && <div className="absolute -bottom-1 bg-black h-[1px] w-5 group-hover:w-5"></div>}
                        <div className="absolute -bottom-1 bg-black h-[1px] w-0 group-hover:w-5 transition-all duration-300"></div>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    </>
  )
}