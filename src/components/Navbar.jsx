import { Link, useLocation } from "react-router-dom";

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
            <div className="section-container py-5 flex items-center justify-between text-black">
                <Link to='/' className="font-serif text-base lg:text-xl font-semibold uppercase">Nemanja Photography</Link>
                <ul className="hidden text-sm md:flex space-x-6">
                    {navLinks.map((navLink, index) => (
                        <li key={index} className="group relative">
                            <Link to={navLink.url}>{navLink.name}</Link>
                            {location.pathname === navLink.url && <div className="absolute -bottom-1 bg-black h-[1px] w-5 group-hover:w-5"></div>}
                            <div className="absolute -bottom-1 bg-black h-[1px] w-0 group-hover:w-5 transition-all duration-300"></div>
                        </li>
                    ))}
                </ul>
                <button className="flex flex-col space-y-[6px] items-end md:hidden">
                    <div className="h-[2px] w-6 bg-black rounded-lg"></div>
                    <div className="h-[2px] w-8 bg-black rounded-lg"></div>
                    <div className="h-[2px] w-4 bg-black rounded-lg"></div>
                </button>
            </div>
        </header>
    )
}