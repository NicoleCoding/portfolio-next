import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiStarship } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";


export default function Home() {
  const skills = [
    { name: "HTML5", icon: <TiHtml5 className="text-orange-500" size={50} /> },
    { name: "CSS3", icon: <SiCsswizardry className="text-blue-500" size={50} /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={50} /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" size={50} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" size={50} /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" size={50} /> },
    { name: "UX Design", icon: <MdOutlineDesignServices className="text-purple-500" size={50} /> },
    { name: "Tailwind.css", icon: <SiTailwindcss className="text-sky-400" size={50} /> },
  ];


  return (
    <section className=" w-full flex flex-col items-center justify-center font-custom p-2 mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
      >
        <SiStarship className="text-white" size={40} />
      </motion.div>

      <section
        id="hero"
        className="flex flex-col justify-center items-center mx-auto text-center p-4 sm:p-0 w-full max-w-3xl"
      >
        <div className="relative z-10 text-white px-4 py-6 flex flex-col items-center">
          <h2 className="font-bold text-lg sm:text-5xl">
            Frontend Developer | UX
          </h2>
          <p className="mt-2 text-xs sm:text-base">
            Hi! My name is Nicole. I am a frontend developer with UX skills.
            With a solid foundation in HTML, CSS, and JavaScript, along with UX
            knowledge, I aim to create amazing user experiences. Always learning and keen to sharpen my expertise in various technologies as the tech universe constantly evolves.
          </p>
          <Link href="/projects">
            <Button
              className="bg-gradient-to-b from-purple-300 to-indigo-600 rounded-lg hover:text-white transition duration-400 mt-4 py-2 px-4 text-black border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600"
              text="Launch My Projects"
            ></Button>
          </Link>
        </div>
      </section>
      <section
        id="skills"
        className="flex flex-col items-center justify-center py-10 px-4 w-full text-white"
      >
        <h2 className="text-3xl font-bold mb-8">Mission Control: My Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 p-4 rounded-lg transition transform hover:scale-105 border-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {skill.icon}
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}