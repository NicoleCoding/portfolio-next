import ProjectDisplay from "../../components/ProjectDisplay";
import { LuRocket } from "react-icons/lu";
import Link from "next/link";
import Button from "@/components/Button";

export default function Projects() {



    return (
        <section className="p-5 font-custom" id="projects-display">
            <div className="flex items-center justify-center">
                <h2 className="font-bold text-3xl sm:text-5xl text-white">Projects</h2>
                <LuRocket className="text-white m-1" size={40}/>
            </div>
            <section className="p-4 flex flex-col justify-center items-center text-center sm:p-8 w-full">
                <p className="max-w-3xl text-center">Explore my projects. In these projects I aim to showcase my skills in frontend development, UX design and problem-solving. Both personal and academic projects are included. This collection will be updated on a regular basis.</p>
            </section>
            <ProjectDisplay />
            <section className="p-4 flex flex-col justify-center items-center text-center sm:p-8 w-full">
                <p className="p-2 text-white max-w-3xl"> If you're looking for a frontend developer who is passionate about creating intuitive, user-centric applications, I would love to connect. Let's talk about how I can contribute to your projects.</p>
            </section>
            <Link href="/contact">
            <Button
              className="bg-gradient-to-b from-purple-300 to-indigo-600 rounded-lg hover:text-white transition duration-400 mt-4 py-2 px-4 text-black border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600"
              text="Reach Out"
            ></Button>
          </Link>
        </section>
        


    );
}