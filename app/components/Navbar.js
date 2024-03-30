"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

const navLinks = [
    {name : 'Home', url: '/'},
    {name : 'Portfolio', url: '/portfolio'},
    {name : 'Services', url: '/services'},
    {name : 'About', url: '/about'},
    {name : 'Contact', url: '/contact'},
  ]

export function Navbar() {

    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-10">
            <div className="section-container py-8 flex items-center justify-between text-white">
                <Link href='/' className="font-serif text-2xl">Nemanja Photography</Link>
                <ul className="hidden text-sm sm:flex space-x-4">
                    {navLinks.map((navLink, index) => (
                        <li key={index} className="group relative">
                            <Link href={navLink.url}>{navLink.name}</Link>
                            {pathname === navLink.url && <div className="absolute -bottom-1 bg-white h-[1px] w-6 group-hover:w-6"></div>}
                            <div className="absolute -bottom-1 bg-white h-[1px] w-0 group-hover:w-6 transition-all duration-300"></div>
                        </li>
                    ))}
                </ul>
                <button className="flex flex-col space-y-[6px] items-end sm:hidden">
                    <div className="h-[2px] w-6 bg-white rounded-lg"></div>
                    <div className="h-[2px] w-8 bg-white rounded-lg"></div>
                    <div className="h-[2px] w-4 bg-white rounded-lg"></div>
                </button>
            </div>
        </header>
    )
};