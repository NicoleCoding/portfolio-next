import { useState } from "react";
import Input from "./Input";
import { motion } from "framer-motion";
import Button from "./Button";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('Submitting');

        try {
            const response = await emailjs.send(
                'service_5gvpktk', 
                'template_gqcukc9',   
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                'foXXH7JG5scM5JY-i'        
            );

            if (response.status === 200) {
                setStatus("Message sent successfully!");
                setFormData({ name: '', email: '', message: ''});
            }
        } catch (error) {
            setStatus("An error occurred sending the message");
            console.error('EmailJS error:', error);
        }
    }

    return (
        <motion.form
            className="flex flex-col items-center max-w-md mx-auto p-10 rounded-lg border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 shadow-2xl shadow-indigo-500"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.4, ease: "easeIn" }} 
        >
            <Input
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
            />
            <Input
                label="E-mail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your E-mail*"
                required
            />
            <Input
                label="Message"
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here*"
                rows={10}
                required
            />
            <Button className="bg-gradient-to-b from-purple-300 to-indigo-600 w-11/12 p-2 rounded text-black hover:text-white transition duration-400 border-transparent border-gradient-gradient-to-b from-purple-300 to-indigo-600 hover:from-indigo-600 hover:to-purple-300 hover:shadow-2xl hover:shadow-indigo-600" type="submit" text="Submit"></Button>
            <p>{status}</p> 
        </motion.form>
    );
}