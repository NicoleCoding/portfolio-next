import React from "react";
import Link from "next/link";
import Button from "../../components/Button"; 
import { useRouter } from "next/router";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { FaChartSimple } from "react-icons/fa6";
import { IoPieChartSharp } from "react-icons/io5";
import { SiCsswizardry } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const projectData = {
    "1": {
        title: "Hotel booking application - Palm Booking Agency",
        techStack: [
            { icon: <FaReact className="text-blue-400"/> , label: "React" },
            { icon: <SiReactrouter className="text-[#61DBFB]"/>, label: "React Router"},
            { icon: <DiBootstrap className="text-[#563D7C]"/> , label: "Bootstrap"}
        ],
        description: "The project aimed to create a specific application for a specific use case scenario and persona. The app was specifically designed for desktop use, so it is not adjusted to mobile and smaller screens. The project was accomplished by teamwork. The application is not completed and only contains certain pages, which are relevant for the booking process.",
        projectImage: "/hotel-app.png",
        liveVersion: "https://lisawiklund.github.io/hotell-app-20244/",
        codeLink: "https://github.com/hotell-app/PalmBookingAgency.github.io",
    },
    "2": {
        title: "Informative application about climate change - KlimatKoll",
        techStack: [
            { icon: <FaReact className="text-blue-400"/> , label: "React" },
            { icon: <SiReactrouter className="text-[#61DBFB]"/>, label: "React Router" },
            { icon: <SiCsswizardry className="text-blue-500" />, label: "CSS" },
            { icon: <IoPieChartSharp className="text-[#8884d8]"/>, label: "Recharts" },
            { icon: <FaChartSimple className="text-[#FF6384]"/>, label: "Chart.js" },

        ],
        description: "The project was about creating an informative application for a specific target audience. The application contains charts and information about various topics on climate change. This was a group project within my education. The user can scroll through the application in order to explore charts and learn about climate change.",
        projectImage: "/prototype-climate-app.jpg",
        liveVersion: "https://klimatkoll.github.io/KlimatKoll-App/",
        codeLink: "https://github.com/KlimatKoll/KlimatKoll-App",
    },
    "3": { 
        title: "Library App - BookVault",
        techStack: [
            { icon: <FaReact className="text-blue-400" /> , label: "React" },
            { icon: <SiCsswizardry className="text-blue-500" />, label: "CSS"},
            { icon: <SiVite className="text-[#646CFF]"/>, label: "Vite"},
            { icon: <SiAxios className="text-[#5A29E4]"/>, label: "Axios" },
            { icon: <FaNodeJs className="text-[#8CC84B]"/>, label: "Node.js" },
            { icon: <SiExpress className="text-white"/>, label: "Express.js"},
            { icon: <SiMongodb className="text-[#4DB33D]"/>, label: "MongoDB"}
        ],
        description: "This is a full-stack web application, which allows users to search for books and also add books to their own collection. In the collection, users can toggle the read status and also remove books. The application gives users the opportunity to find books that they want to read and add them to a collection in case they want to read a specific book or specific books. The books are stored in a database in the backend.",
        projectImage: "/library-app-img.jpg",
        liveVersion: undefined,
        codeLink: "https://github.com/NicoleCoding/BookVault",
    }
};

export default function Project() {
    const router = useRouter();
    const { id } = router.query; // Get the id from the URL
    const project = projectData[id]; // Get the project data based on id
    const hasLiveVersion = project?.liveVersion !== undefined; // Check if there's a live version

    if (!project) {
        return <div>Project not found.</div>; // Return a not found message if project doesn't exist
    }

    return (
        <div className="p-5 font-custom">
            <div className="flex justify-start items-center">
                <Link href="/projects" className="py-1 px-2">
                    <Button text="Go back to projects" className="bg-gradient-to-b from-purple-300 to-indigo-600 p-4 rounded-lg hover:text-white transition duration-400 mt-4 py-2 px-4 text-black border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600" />
                </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center">
                <section className="w-full md:w-6/12 p-2 md:mr-6">
                    <Image 
                        src={project.projectImage} 
                        alt={project.title}
                        layout="responsive"
                        width={16} // Aspect ratio width
                        height={9}
                        className="w-full rounded-lg shadow-lg"
                        onError={(e) => {
                            e.target.style.display = 'none'; // Hide broken image
                        }}
                    />
                    <div id="links" className="flex justify-center pt-4 space-x-4">
                        {hasLiveVersion ? (
                            <a 
                                href={project.liveVersion} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="py-1 px-2 text-black hover:text-teal-500"
                            >
                            <Button className="bg-gradient-to-b from-purple-300 to-indigo-600 p-4 rounded-lg hover:text-white transition duration-400 mt-4 py-2 px-4 text-black border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600" text="Live Version" />
                            </a>
                        ) : (
                            <Button className="bg-gray-400 p-4 rounded-lg mt-4 py-2 px-4" text="Live Version coming soon" disabled />
                        )}
                        <a 
                            href={project.codeLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="py-1 px-2 text-black hover:text-teal-500"
                        >
                            <Button text="Source Code" className="bg-gradient-to-b from-purple-300 to-indigo-600 p-4 rounded-lg hover:text-white transition duration-400 mt-4 py-2 px-4 text-black border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600" />
                        </a>
                    </div>
                </section>
                <section className="w-full md:w-5/12 text-center md:text-left mt-4 md:mt-0">
                    <h2 className="font-bold text-2xl bg-gradient-to-b from-purple-300 to-indigo-600 bg-clip-text text-transparent m-2 text-center">{project.title}</h2>
                    <p className="text-base text-white p-2">{project.description}</p>
                <section>
                    <h2 className="font-bold text-2xl bg-gradient-to-b from-purple-300 to-indigo-600 bg-clip-text text-transparent m-2 text-center">Tech Stack</h2>
                    <ul className="flex flex-wrap justify-center">
                        {project.techStack.map((tech, index) => (
                            <li key={index} className="tech-item flex items-center space-x-2 p-2">
                                <span className="icon-container">{tech.icon}</span>
                                <span>{tech.label}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                </section>
            </div>
        </div>
    );
}