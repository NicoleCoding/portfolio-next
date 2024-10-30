import Link from "next/link";

export default function Nav() {

    return (
        <nav className="flex flex-col md:flex-row items-center font-custom">
            <ul>
                <li className="mb-2 md:mb-0"><Link href="/">Home</Link></li>
                <li className="mb-2 md:mb-0"><Link  href="/projects">Projects</Link></li>
                <li className="mb-2 md:mb-0"><Link  href="/about">About</Link></li>
                <li className="mb-2 md:mb-0"><Link  href="/contact">Contact</Link></li>
            </ul>
        </nav>

    );
   
}