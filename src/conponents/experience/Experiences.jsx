import { useEffect, useState } from "react";
import "./Experiences.css";

const jobDesc = ( desc ) => desc.map((item, key) => <li key={key}>{item}</li>)

export default function Experience() {
    const [workExperiences, setWorkExperiences] = useState([])
    useEffect(() => {
        (async () => {
            const response = await fetch("/experiences.json");
            setWorkExperiences(await response.json());
        })();
    },[])

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
        <div className="section container">
            <h2>Work Experiences</h2>
            <ul className="experience-container">{experienceCard}</ul>
        </div>
    )
}
