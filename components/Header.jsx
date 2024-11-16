import Nav from "./Nav";
import Link from "next/link";
import { SiStarship } from "react-icons/si";
import { motion } from "framer-motion";

export default function Header() {

    return (
        <header className="sticky top-0 left-0 right-0 z-10 w-screen pb-4 text-white">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
                <Link href="/">
                <h1 className="bg-gradient-to-b from-purple-300 to-indigo-600 bg-clip-text text-transparent font-logo p-0 text-4xl sm:text-5xl">Nicole Saucinitanu</h1></Link>
                <Nav />
            </div>
        </header>

    );
}