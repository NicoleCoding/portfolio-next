import Nav from "./Nav";
import Link from "next/link";

export default function Header() {

    return (
        <header className="bg-white sticky top-0 left-0 right-0 z-10 w-screen">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
                <Link href="/"><h1 className="text-black font-logo p-2">NicoleCoding</h1></Link>
                <Nav />
            </div>
        </header>

    );
}