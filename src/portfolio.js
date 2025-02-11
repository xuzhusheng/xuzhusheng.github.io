import AiLottie from "./assets/lotties/ai-lottie.json?url";
import FullstackLottie from "./assets/lotties/fullstack-lottie.json?url";
import ThreeDimension from "./assets/lotties/3d-lottie.json?url"
import InfraLottie from "./assets/lotties/infra-lottie.json?url"

const PROFILE_SKILLS = [
    {
        title: "Data Science & Machine Learning",
        skills: [
            { name: "Python", icon: "logos:python" },
            { name: "NumPy", icon: "logos:numpy" },
            { name: "Pandas", icon: "logos:pandas-icon" },
            { name: "PyTorch", icon: "logos:pytorch-icon" },
            { name: "Scikit learn", icon: "devicon:scikitlearn" },
            { name: "Matplotlib", icon: "logos:matplotlib-icon" },
        ],
        desc: [
            "Developing machine learning models using PyTorch & Scikit learn",
            "Processing data using Pandas & NumPy",
        ],
        lottie: AiLottie,
    },
    {
        title: "Full Stack Development",
        skills: [
            { name: "FastAPI", icon: "logos:fastapi-icon" },
            { name: "Java", icon: "logos:java" },
            { name: "Spring", icon: "logos:spring-icon" },
            { name: "JavaScript", icon: "logos:javascript" },
            { name: "ReactJS", icon: "logos:react" },
            // { name: "React Router", icon: "logos:react-router" },
            { name: "Vue.js", icon: "logos:vue" },
            { name: "Playwright", icon: "logos:playwright" },
        ],
        desc: [
            "Building responsive website front end using ReactJs & Vue.js",
            "Creating application backend using Java Spring & FastAPI",
            "Testing and scraping webpage using Playwright",
        ],
        lottie: FullstackLottie,
    },
    {
        title: "3D Models Processing & Rendering",
        skills: [
            {
                name: "Three.js",
                icon: "skill-icons:threejs-dark",
            },
            { name: "glTF", icon: "file-icons:gltf", color: "#31c449" },
            { name: "3D Tiles", icon: "gis:3dtiles-file" },
        ],
        desc: [
            "Creating and converting 3D models in glTF & 3d Tiles",
            "Rendering 3d models using Three.js",
        ],
        lottie: ThreeDimension,
    },
    {
        title: "Infra-Architecture",
        skills: [
            { name: "Redis", icon: "logos:redis" },
            { name: "MySQL", icon: "logos:mysql-icon" },
            { name: "PostgreSQL", icon: "logos:postgresql" },
            { name: "MongoDB", icon: "logos:mongodb-icon" },
            { name: "RabbitMQ", icon: "logos:rabbitmq-icon" },
            { name: "Celery", icon: "simple-icons:celery", color: "#B6DE64" },
            { name: "Nginx", icon: "logos:nginx" },
            { name: "Docker", icon: "logos:docker-icon" },
        ],
        desc: [
            "Experience of working with multiple databases",
            "Building distributed tasks process system by Celery",
            "Manage development environment with Docker",
        ],
        lottie: InfraLottie,
    },
];

const SOCIAL_MEDIAS = [
    {
        name: "github",
        link: "https://github.com/xuzhusheng",
        icon: "fab fa-github",
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/xuzhusheng/",
        icon: "fab fa-linkedin-in",
    },
    {
        name: "medium",
        link: "https://xuzhusheng.medium.com",
        icon: "fab fa-medium",
    },
    {
        name: "gmail",
        link: "mailto:dreamergz@gmail.com",
        icon: "fas fas fa-envelope",
    },
];

const SEO_META_DATA = {
    url: import.meta.env.VITE_HOST,
    title: "Xu Zhusheng | Portfolio",
    description:
        "Xu Zhusheng is a software engineer who is experienced in Data Science & Machine Learning, Full Stack Development, 3D Models Processing & Rendering",
    author: "Xu Zhusheng",
    keywords: PROFILE_SKILLS.flatMap((section) => section.skills).map(
        (skill) => skill.name
    ),
    jsonSchema: {
        "@context": "https://schema.org/",
        "@type": "Person",
        name: "Xu Zhusheng",
        url: import.meta.env.VITE_HOST,
        sameAs: SOCIAL_MEDIAS.flatMap((media) => media.link).filter(
            (link) => !link.startsWith("mailto")
        ),
        jobTitle: "Software Engineer",
    },
};

export { PROFILE_SKILLS, SEO_META_DATA, SOCIAL_MEDIAS };
