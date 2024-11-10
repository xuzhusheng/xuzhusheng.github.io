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
            { name: "Playwrght", icon: "logos:playwright" },
        ],
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
    },
    {
        title: "Cloud Infra-Architecture",
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


    /* <script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Jason Xuzhusheng",
  "url": "localhost",
  "image": "githubio.com/avator.png",
  "sameAs": [
    "linkedin.com/xuzhusheng",
    "github.com/xuzhusheng",
    "xuzhusheng.medium.com"
  ],
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "company"
  }  
}
</script> */


const SEO_META_DATA = {
    url: import.meta.env.VITE_HOST,
    title: "Xu Zhusheng | Portfolio",
    description:
        "Xu Zhusheng is a software engineer who is experienced Data Science & Machine Learning, Full Stack Development, 3D Models Processing & Rendering",
    author: "Xu Zhusheng",
    keywords: PROFILE_SKILLS.flatMap((section) => section.skills).map(
        (skill) => skill.name
    ),
    jsonSchema: {
        "@context": "https://schema.org/",
        "@type": "Person",
        name: "Xu Zhusheng",
        url: import.meta.env.VITE_HOST,
        sameAs: SOCIAL_MEDIAS.flatMap((media) => media.link).filter((link) =>
            !link.startsWith("mailto")
        ),
        jobTitle: "Software Engineer",
    },
};

export { PROFILE_SKILLS, SEO_META_DATA, SOCIAL_MEDIAS };
