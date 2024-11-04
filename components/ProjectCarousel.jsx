import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles if needed
import "swiper/css/pagination"; // Import pagination styles if needed
import Link from 'next/link';
import Button from './Button'; 

export default function ProjectCarousel({ projects }) {
    if (!projects || !projects.length) {
        return <p>No projects available.</p>; // Fallback message when no projects
    }

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {projects.map(project => (
                <SwiperSlide key={project.id}>
                    <div className="text-center">
                        <h3 className="mb-2 p-2 text-2xl font-semibold">{project.title}</h3>
                        <img
                            src={project.projectImage}
                            alt={project.title}
                            width="1000rem"
                            className="mx-auto p-2"
                            onError={(e) => {
                                console.error('Image failed to load:', project.projectImage);
                                e.target.style.display = 'none'; // Hide broken image
                            }}
                        />
                        <Link href={`/projects/${project.id}`}>
                            <Button className="bg-teal-200 m-2" text="View project details" />
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}