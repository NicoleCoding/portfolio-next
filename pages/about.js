import { HiOutlineLightBulb } from "react-icons/hi";
import Button from "@/components/Button";
import Link from "next/link";


export default function About() {
    return (
        <section className="font-custom">
            <div className="flex items-center justify-center m-5">
                <h2 className="font-bold text-3xl sm:text-5xl text-white">About Me</h2>
                <HiOutlineLightBulb className="text-white m-1" size={40}/>
            </div>
            <section className="flex flex-col md:flex-row content-center">
                <section className="flex flex-col items-center text-center basis-full">
                <h3 className="text-2xl m-1 font-bold">Mission Briefing: Who I am</h3>
                <p className="m-3 w-4/5 text-center leading-relaxed">I am a recent graduate in Information Architecture, with a deep passion for the development of innovative software, particularly in the vast space of the web.
                </p>
                <p className="m-3 w-4/5 text-center leading-relaxed">Throughout my academic journey, I’ve equipped myself with a robust foundation in user experience principles, the art of information organization, and the latest advancements in web technologies. This knowledge has not only enabled me to understand how users interact with digital environments but has also fueled my mission to make these experiences as seamless and engaging as possible.</p>
                <p className="m-3 w-4/5 text-center leading-relaxed"> Each day, I continue to explore new frontiers in my craft—whether it’s through self-learning, engaging with new projects, or refining my skills. This constant drive to stay on the cutting edge ensures that my abilities remain sharp and ready to tackle whatever challenges lie ahead in the digital cosmos.</p>
                </section>
                <section className="flex flex-col items-center basis-full">
                <h3 className="text-2xl m-1 font-bold">Mission Objective: Future Career Vision</h3>
                <p className="m-3 w-4/5 text-center leading-relaxed">I seek to join a dynamic, forward-thinking team where I can contribute my skills and boundless enthusiasm to the creation of exceptional user experiences and innovative web solutions. The opportunity to collaborate with like-minded individuals to push the boundaries of what’s possible in digital space is one I look forward to.
                </p>
                <p className="m-3 w-4/5 text-center leading-relaxed pb-10"> My goal is to create user experiences, that are functional and pleasant for the user. I am also working towards becoming a fullstack-developer, which will enable me to construct both the frontend and backend of projects — ensuring that every mission I embark on is complete, scalable, and impactful.</p>
                </section>
            </section>
            <Link href="/projects">
            <Button
              className="bg-gradient-to-b from-purple-300 to-indigo-600 rounded-lg hover:text-white transition duration-400 mt-4 py-2 px-4 text-black border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600"
              text="Launch my Projects"
            ></Button>
            </Link>
        </section>
    );
}