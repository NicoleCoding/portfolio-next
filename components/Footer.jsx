import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="pt-6 mt-5 text-white font-custom w-screen">
            <p className="text-center">&copy; 2024 Nicole Saucinitanu. All rights reserved.</p>
            <div className="flex flex-row justify-center items-center gap-10">
                <a href="https://www.linkedin.com/in/nicole-saucinitanu-9b95ba167/" className="flex items-center justify-center hover:text-indigo-300 transition duration-400 m-2 text-white border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600"><FaLinkedin className="m-1 text-white" />LinkedIn</a>
                <a href="https://github.com/NicoleCoding" className="flex items-center justify-center hover:text-indigo-300 transition duration-400 m-2 text-white"><FaGithub className="m-1 text-white border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600" />GitHub</a>
            </div>
        </footer>

    );
    
}