import { HiOutlineLightBulb } from "react-icons/hi";

export default function About() {
    return (
        <section className="font-custom">
            <div className="flex items-center justify-center m-5">
                <h2 className="font-bold text-4xl text-teal-500">About</h2>
                <HiOutlineLightBulb className="text-teal-500 m-1" size={40}/>
            </div>
            <section className="flex flex-col items-center">
                <h3 className="text-2xl m-1">Who I am</h3>
                <p className="m-3 w-4/5 text-left leading-relaxed">My name is Nicole and I am recent graduate in Information architecture with a passion for development of various types of software, especially within the web.
                </p>
                <p className="m-3 w-4/5 text-left leading-relaxed">Through my degree I acquired a solid foundation in structuring and designing digital environments. My education has equipped me with a deep understanding of user experience principles, 
                    information organization, and the latest web technologies.</p>
                <p className="m-3 w-4/5 text-left leading-relaxed"> In addition, I try to learn something new everyday in order to develop my skills. By working on projects regularly, I keep my skills sharp and relevant.</p>
                <h3 className="text-2xl m-1">What I want to achieve</h3>
                <p className="m-3 w-4/5 text-left leading-relaxed">Bringing skills and enthusiasm to a dynamic team, where I can contribute to creating exceptional user experiences and innovative web solutions, is something I look forward to.
                </p>
                <p className="m-3 w-4/5 text-left leading-relaxed pb-10"> My goal is to create user experiences, that are functional and pleasant for the user. I am also working towards becoming a fullstack-developer in order to be able to create both frontends and backends for projects.</p>
            </section>
            <section className="relative bg-skills-background bg-no-repeat bg-cover m-4 sm:mx-auto p-4 md:p-8 max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl rounded-lg">
                <div className="absolute inset-0 bg-black opacity-45 rounded-lg"></div>
                <div className="relative text-white z-10">
                    <p className="text-stroke-black text-stroke-1">Throughout my academic journey and through self-studies, I have developed a diverse skill set, which includes:</p>
                    <ul className="flex flex-col items-center text-white">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Agile development</li>
                        <li>Git</li>
                        <li>UX-design</li>
                        <li>Adobe PhotoShop</li>
                        <li>Adobe XD</li>
                        <li>Figma</li>
                        <li>Prototyping</li>
                    </ul>
                </div>
            </section>
        </section>
    );
}