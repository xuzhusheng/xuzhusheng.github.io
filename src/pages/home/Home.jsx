// import SocialMedia from "/src/components/social-media/SocialMedia.jsx";
// import Skills from "/src/components/skills/Skills.jsx";
// import Experience from "/src/components/experience/Experiences.jsx";
// import Projects from "/src/components/projects/Projects.jsx";
import Button from "/src/components/button/Button.jsx";
import "./Home.css";
import LazyLottie from "../../components/lazy-lottie/LazyLottie";
import { Suspense, lazy } from "react";

const Skills = lazy(() => import("/src/components/skills/Skills.jsx"));
const SocialMedia = lazy(() =>
    import("/src/components/social-media/SocialMedia.jsx")
);

const Projects = lazy(() => import("/src/components/projects/Projects.jsx"));
const Experience = lazy(() =>
    import("/src/components/experience/Experiences.jsx")
);
import GreetingLottie from "/src/assets/lotties/greeting-lottie.json?url";

export default function Home() {
    return (
        <>
            <div className="section container">
                <div className="section content">
                    <div id="greeting">
                        <h1>Xu Zhusheng</h1>
                        <p>
                            A passionate software engineer having experiences of
                            building applications with Python, Java, JavaScript.
                        </p>

                        <SocialMedia />
                        <div className="button-div">
                            <Button text="Contact Me" href="/contact" />
                            <Button text="See My Resume" href="/resume" />
                        </div>
                    </div>
                    <div>
                        <LazyLottie animationUrl={GreetingLottie} />
                    </div>
                </div>
            </div>

            <Suspense>
                <Skills />
                <Projects />
                <Experience />
            </Suspense>
        </>
    );
}
