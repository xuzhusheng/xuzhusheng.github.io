import { useEffect, useState, useRef } from "react";
import "./Experiences.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const jobDesc = ( desc ) => desc.map((item, key) => <li key={key}>{item}</li>)

export default function Experience() {
        const ref = useRef(null);
        const inView = useIntersectionObserver(ref, {
            rootMargin: "50%",
        });

    const [workExperiences, setWorkExperiences] = useState([])
    useEffect(() => {
        if (!inView) return;

        (async () => {
            const response = await fetch("/experiences.json");
            setWorkExperiences(await response.json());
        })();
    },[inView])

    const experienceCard = workExperiences.map((job, key) => (
        <li key={key} className="experience section content">
            <span className="duration">{job.duration}</span>
            <div className="description">
                <h3>
                    <span>{job.title}</span>
                    <br />
                    <a href={job.url} target="_blank">
                        {job.company}
                    </a>
                </h3>
                <ul>{jobDesc(job.desc)}</ul>
            </div>
        </li>
    ));

    return (
        <div className="section container" ref={ref}>
            <h2>Work Experiences</h2>
            {inView && <ul className="experience-container">{experienceCard}</ul>}
        </div>
    )
}
