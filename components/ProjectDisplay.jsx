import Link from 'next/link';
import Button from './Button'; 

export default function ProjectDisplay() {
    const projects = [
        {  id: "1",
           title: "Hotel booking application - Palm Booking Agency",
           projectImage: "/prototype-hotel-app.jpg",
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
                <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img 
                        src={project.projectImage} 
                        alt={project.title} 
                        className="mx-auto p-2 w-full"
                        onError={(e) => {
                            console.error('Image failed to load:', project.projectImage);
                            e.target.style.display = 'none'; // Hide broken image
                        }}
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            <h3>{project.title}</h3>
                        </div>
                        <Link href={`/projects/${project.id}`}>
                            <Button className="bg-teal-200 m-2 p-4 rounded-lg w-7/12" text="View project details" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}