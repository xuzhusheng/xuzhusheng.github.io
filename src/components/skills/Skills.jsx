import "./Skills.css";
import { Icon } from "@iconify/react";
import { PROFILE_SKILLS } from "../../portfolio";
import LazyLottie from "../lazy-lottie/LazyLottie";

const skillIcons = (skills) =>
    skills.map((skill, key) => (
        <li key={key} className="skill">
            <Icon icon={skill.icon} color={skill.color} />
            <p className="skill-name">{skill.name}</p>
        </li>
    ));

const skillDesc = (desc) => 
    desc.map((item, key) => (<li key={key}>{item}</li>));

// const SkillSections = PROFILE_SKILLS.map((section, key) => (
//     <li key={key}>
//         <h3>{section.title}</h3>
//         <ul className="skills-list">{skillIcons(section.skills)}</ul>
//     </li>
// ));

const sections = PROFILE_SKILLS.map((section, key) => (
    <div key={key} className="section content skill-section-container">
        <div className="skill-section">
            <h3>{section.title}</h3>
            <ul className="skills-list">{skillIcons(section.skills)}</ul>
            <ul className="skill-desc">{skillDesc(section.desc)}</ul>
        </div>
        <LazyLottie animationUrl={section.lottie} />
    </div>
));

export default function Skills() {
    return (
        <div id="skills" className="section container">
            <h2>What I do?</h2>
            {sections}
            {/* <div className="section content">
                <ul className="skill-section">{SkillSections}</ul>
                <div>
                    <LazyLottie animationUrl={SkillsLottie} />
                </div>
            </div> */}
        </div>
    );
}
