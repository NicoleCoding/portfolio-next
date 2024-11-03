import Link from "next/link";
import Button from "./Button";

const projectData = {
    "1": {
        title: "Hotel booking application - Palm Booking Agency",
        techStack: "React, Bootstrap, React Router, MDB React UI Kit",
        description: "The project aimed to create a specific application for a specific use case scenario and persona. The app was specifically designed for desktop use, so it is not adjusted to mobile and smaller screens. The project was accomplished by teamwork. The application is not completed and only contains certain pages, which are relevant for the booking process.",
        projectImage: "/prototype-hotel-app.PNG",
        liveVersion: "https://lisawiklund.github.io/hotell-app-20244/",
        codeLink: "https://github.com/PalmBookingAgency/HotelApp",
    },
    "2": {
        title: "Informative application about climate change - KlimatKoll",
        techStack: "React, React Router, React Router, Chart.js, Recharts",
        description: "The project was about creating an informative application for a specific target audience. The application contains charts and information about various topics on climate change. This was a group project within my education. The user can scroll through the application in order to explore charts and learn about climate change.",
        projectImage: "/prototype-climate-app.PNG",
        liveVersion: "https://klimatkoll.github.io/KlimatKoll-App/",
        codeLink: "https://github.com/KlimatKoll/KlimatKoll-App",

    },
    "3": { 
        title: "Library App - BookVault",
        techStack: "React, CSS, Vite, Axios, Node.js, Express.js, Mongoose, MongoDB Atlas",
        description: "This is a full-stack web application, which allows users to search for books, and also add books to their own collection. In the collection, users can toggle the read status and also remove books. The application gives users the opportunity to find books that they want to read and add them to a collection in case they want to read a specific book or specific books. The books are stored in a database in the backend.",
        projectImage: "/library-app-img.PNG",
        liveVersion: undefined,
        codeLink: "https://github.com/NicoleCoding/BookVault",
    }

};

export default function Project() {
    const [match, params] = useRoute("/projects/:id");
    const projectID = params.id;
    const project = projectData[projectID];
    const hasLiveVersion = project.liveVersion !== undefined;

    if(!project) {
        return <div>Project not found.</div>
    }

    return (
        <div className="p-5 font-custom">
            <div className="flex justify-start items-center">
            <Link href="/projects" className="py-1 px-2 text-black hover:text-teal-500">
                <Button text="Go back to projects" className="bg-teal-200"></Button>
            </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center">
            <section className="w-full md:w-6/12 p-2 md:mr-6">
                <img 
                    src={project.projectImage} 
                    alt={project.title} 
                    className="w-full rounded-lg shadow-lg"
                    onError={(e) => {
                        e.target.style.display = 'none'; // Hide broken image
                    }}
                />
            <div id="links" className="flex justify-center pt-4 space-x-4">
                <a href={project.liveVersion} className="py-1 px-2 text-black hover:text-teal-500">
                    <Button className={`${hasLiveVersion ? 'bg-teal-200' : 'bg-gray-400'}`}
                        onClick={() => {
                            if(hasLiveVersion) {
                                window.open(project.liveVersion, '_blank');
                            }
                        }}
                        disabled={!hasLiveVersion}
                        text={hasLiveVersion ? 'View Live Version' : 'Live Version coming soon'}
                    >
                    </Button>
                </a>
                <a href={project.codeLink} className="py-1 px-2 text-black hover:text-teal-500">
                    <Button text="View code" className="bg-teal-200"></Button>
                </a>
            </div>
            </section>
            <section className="w-full md:w-5/12 text-center md:text-left mt-4 md:mt-0">
                <h2 className="font-bold text-2xl text-teal-500 m-2">{project.title}</h2>
                <p className="text-base text-gray-600 p-2">Tech stack: {project.techStack}</p>
                <p className="text-base text-gray-600 p-2">{project.description}</p>
            </section>
            </div>
        </div>
    )
}