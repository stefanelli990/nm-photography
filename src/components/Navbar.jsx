import { Link, useLocation } from "react-router-dom";
import logo from '../assets/nm-logo.svg';

export default function Navbar() {

    const location = useLocation()

    const navLinks = [
        {name: 'Home', url: '/'},
        {name: 'Portfolio', url: '/portfolio'},
        {name: 'About', url: '/about'},
        {name: 'Contact', url: '/contact'},
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-white">
            <div className="section-container py-3 flex items-center justify-between text-black">
                <Link to='/' className="font-serif text-base lg:text-xl uppercase">
                    <img className="w-24" src={logo} alt="Nemanja Photography Logo" />
                </Link>
                <ul className="hidden text-sm space-x-6">
                    {navLinks.map((navLink, index) => (
                        <li key={index} className="group relative">
                            <Link to={navLink.url}>{navLink.name}</Link>
                            {location.pathname === navLink.url && <div className="absolute -bottom-1 bg-black h-[1px] w-5 group-hover:w-5"></div>}
                            <div className="absolute -bottom-1 bg-black h-[1px] w-0 group-hover:w-5 transition-all duration-300"></div>
                        </li>
                    ))}
                </ul>
                <button className="flex flex-col space-y-[7px] items-end">
                    <div className="h-[0.1rem] w-6 bg-black"></div>
                    <div className="h-[0.1rem] w-8 bg-black"></div>
                    <div className="h-[0.1rem] w-4 bg-black"></div>
                </button>
            </div>
        </header>
    )
}