import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Button from "@/components/Button";


export default function Home() {
  return (
    <section className="container mx-auto p-4 md:p-8 max-w-screen-4xl font-custom">
    <section id="hero" className="p-0 sm:p-2 relative flex flex-col md:flex-col justify-between items-center bg-hero-background bg-no-repeat bg-cover text-white rounded-lg h-25 bg-center aspect-square sm:aspect-auto overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative z-10 text-white px-4 py-6 flex flex-col items-center justify-center h-full">
        <h2 className="font-bold text-lg sm:text-2xl text-teal-500 text-center">
            Creating clean, usable user interfaces with creativity and Information Architecture expertise
        </h2>
        <p className="mt-2 text-xs sm:text-base text-center">
        Welcome to my portfolio! I am an aspiring frontend developer with UX skills. With a solid foundation in HTML, CSS, and JavaScript, along with my UX knowledge, I create amazing user experiences. Always learning and keen to sharpen my expertise in various technologies as tech constantly evolves.
        </p>
    <Link className="py-2 px-4 text-black hover:text-teal-500 mt-4" href="/projects">
        <Button className="bg-teal-200 text-xs sm:text-sm" text="See my projects"></Button>
    </Link>
        </div>
    </section>
    <section id="roles" className="flex flex-col m-x p-1 lg:flex-row justify-center items-stretch gap-20">
        <section className="shadow-lg p-6 mx-auto lg:mx-0 rounded-lg w-80 text-center flex flex-col justify-start">
            <h3 className="text-2xl mb-4 mt-0">Frontend Development</h3>
            <p className="p-2 m-0">With skills in HTML5, CSS3, JavaScript (ES6), and React.js, I develop frontends using tools like Git, Webpack, Vite, and npm. 
                I ensure accessibility and usability in web interfaces and leverage APIs to create functional websites and applications. Additionally, I can build websites with WordPress.
            </p>

        </section>
        <section className="shadow-lg p-6 mx-auto lg:mx-0 rounded-lg w-80 text-center flex flex-col justify-start">
            <h3 className="text-2xl mb-4 mt-0">UX-Design & Research</h3>
            <p className="p-2 m-0">UX design principles are used to create great user experiences, backed by research on target users. 
                My education covers user personas, storyboards, and user stories, enabling effective UX research. I also use tools like Figma and Photoshop to prototype designs.
            </p>

        </section>
        <section className="shadow-lg p-6 mx-auto lg:mx-0 rounded-lg w-80 text-center flex flex-col justify-start">
            <h3 className="text-2xl mb-4 mt-0">Reach out</h3>
            <p className="p-2 m-0">Interested in collaboration or got questions? Feel free to reach out!</p>
            <p className="p-2 m-0">For project inquiries, please provide a brief overview of your needs, and I'll get back to you with potential solutions.</p>
            <Link className="py-1 px-2 text-black hover:text-teal-500" href="/contact">
            <Button className="bg-teal-200" text="Contact me"></Button>
        </Link>
        </section>
    </section>


</section>
  );
}
