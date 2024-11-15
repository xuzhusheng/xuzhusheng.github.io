import "./Skills.css";
import { Icon } from "@iconify/react";
import { PROFILE_SKILLS } from "../../portfolio";
import LazyLottie from "../lazy-lottie/LazyLottie";
import SkillsLottie from "/src/assets/lotties/skills-lottie.json?url";

const skillIcons = (skills) =>
    skills.map((skill, key) => (
        <li key={key} className="skill">
            <Icon icon={skill.icon} color={skill.color} />
            <p className="skill-name">{skill.name}</p>
        </li>
    ));

const SkillSections = PROFILE_SKILLS.map((section, key) => (
    <li key={key}>
        <h3>{section.title}</h3>
        <ul className="skills-list">{skillIcons(section.skills)}</ul>
    </li>
));

export default function Skills() {
    return (
        <div id="skills" className="section container">
            <h2>What I do?</h2>
            <div className="section content">
                <ul className="skill-section">{SkillSections}</ul>
                <div>
                    <LazyLottie animationUrl={SkillsLottie} />
                </div>
            </div>
        </div>
    );
}
