import { Link } from "react-router-dom";
import logo from '../assets/nm-logo.svg';

export default function Navbar({ open, setOpen }) {

    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-white">
            <div className="wrapper py-3 flex items-center justify-between text-black">
                <Link to='/' className="font-serif text-base lg:text-xl">
                    <img className="w-24" src={logo} alt="NM Photography Logo"/>
                </Link>
                <button onClick={() => setOpen(!open)} aria-label="Open menu" className="w-8 h-8 flex justify-center flex-col space-y-[7px] items-end group">
                    <div className="h-[0.1rem] w-6 bg-black group-hover:w-8 duration-500"></div>
                    <div className="h-[0.1rem] w-8 bg-black group-hover:w-8 duration-500"></div>
                    <div className="h-[0.1rem] w-4 bg-black group-hover:w-8 duration-500"></div>
                </button>
            </div>
        </header>
    )
}