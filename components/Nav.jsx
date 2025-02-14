import Link from "next/link";
import { useState } from "react";
import Hamburger from "hamburger-react";

export default function Nav() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="flex flex-col md:flex-row items-center font-custom">
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
            <ul className={`flex flex-col md:flex-row md:items-center justify-end transition-transform duration-300 ${isOpen ? "block" : "hidden"} md:flex`}>
                <li className="mb-2 md:mb-0 p-2 hover:text-indigo-300 transition duration-400 border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600"><Link href="/">Start</Link></li>
                <li className="mb-2 md:mb-0 p-2 hover:text-indigo-300 transition duration-400 border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600"><Link  href="/projects">Projects</Link></li>
                <li className="mb-2 md:mb-0 p-2 hover:text-indigo-300 transition duration-400 border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600"><Link  href="/about">About</Link></li>
                <li className="mb-2 md:mb-0 p-2 hover:text-indigo-300 transition duration-400 border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600"><Link  href="/contact">Contact</Link></li>
            </ul>
        </nav>

    );
   
}