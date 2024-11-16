import { PiEnvelope } from "react-icons/pi";
import Form from "../components/Form";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="font-custom">
            <div className="flex items-center justify-center">
                <h2 className="font-bold text-3xl sm:text-5xl text-white">Contact</h2>
                <PiEnvelope className="text-white m-1" size={40}/>
            </div>
            <section className="p-2 flex flex-col justify-center items-center text-center sm:p-8 w-full">
            <p className="p-2 text-white max-w-3xl">If you have any questions or are interested in collaboration, you can contact me through the below contact form.
                I will respond to your message within 24 hours.
            </p>
            </section>
            <Form></Form>
        </section>

    );
    
}