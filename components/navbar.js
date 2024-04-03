"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { navLinks } from "@/app/data";

export default function Navbar() {

    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-white">
            <div className="section-container py-6 flex items-center justify-between text-black">
                <Link href='/' className="font-serif text-xl sm:text-2xl">Nemanja Photography</Link>
                <ul className="hidden text-sm md:flex space-x-8 uppercase">
                    {navLinks.map((navLink, index) => (
                        <li key={index} className="group relative">
                            <Link href={navLink.url}>{navLink.name}</Link>
                            {pathname === navLink.url && <div className="absolute -bottom-1 bg-black h-[1px] w-6 group-hover:w-6"></div>}
                            <div className="absolute -bottom-1 bg-black h-[1px] w-0 group-hover:w-6 transition-all duration-300"></div>
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
};