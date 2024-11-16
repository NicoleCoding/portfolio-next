import Link from 'next/link';
import Button from './Button'; 
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectDisplay() {
    const projects = [
        {  id: "1",
           title: "Hotel booking application - Palm Booking Agency",
           projectImage: "/hotel-app.png",
        },
        {  id: "2",
           title: "Informative application about climate change - KlimatKoll",
            projectImage: "/prototype-climate-app.jpg",
    
        },
        {   id: "3", 
            title: "Library App - BookVault",
            projectImage: "/library-app-img.jpg",
        }
    
    ];

    if (!projects || !projects.length) {
        return <p>No projects available.</p>; // Fallback message when no projects
    }

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project) => (
                <motion.div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image 
                        src={project.projectImage} 
                        alt={project.title}
                        width={400}
                        height={400}
                        className="mx-auto p-2 w-full"
                        onError={(e) => {
                            console.error('Image failed to load:', project.projectImage);
                            e.target.style.display = 'none'; // Hide broken image
                        }}
                    />
                    <div className="px-6 py-4 flex flex-col flex-grow">
                        <div className="font-bold text-xl mb-2">
                            <h3>{project.title}</h3>
                        </div>
                        <div className="mt-auto">
                        <Link href={`/projects/${project.id}`}>
                            <Button className="bg-gradient-to-b from-purple-300 to-indigo-600 p-4 rounded-lg border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600 hover:text-white transition duration-400 mt-4 py-2 px-4 text-black" text="Navigate to Project" />
                        </Link>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}