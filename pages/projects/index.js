import ProjectDisplay from "../../components/ProjectDisplay";
import { LuRocket } from "react-icons/lu";

export default function Projects() {



    return (
        <section className="p-5 font-custom" id="projects-display">
            <div className="flex items-center justify-center">
                <h2 className="font-bold text-4xl text-teal-500">Projects</h2>
                <LuRocket className="text-teal-500 m-1" size={40}/>
            </div>
            <section className="p-4">
                <p>Explore my projects here. Both personal and academic projects are included. This collection will be updated on a regular basis.</p>
            </section>
            <ProjectDisplay />
        </section>
        


    );
}