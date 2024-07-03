// import SocialMedia from "/src/conponents/social-media/SocialMedia.jsx";
// import Skills from "/src/conponents/skills/Skills.jsx";
// import Experience from "/src/conponents/experience/Experiences.jsx";
// import Projects from "/src/conponents/projects/Projects.jsx";
import Button from "/src/conponents/button/Button.jsx";
import "./Home.css";
import LazyLottie from "../../conponents/lazy-lottie/LazyLottie";
import { Suspense, lazy } from "react";

const Skills = lazy(() => import("/src/conponents/skills/Skills.jsx"));
const SocialMedia = lazy(() =>
    import("/src/conponents/social-media/SocialMedia.jsx")
);

const Projects = lazy(() => import("/src/conponents/projects/Projects.jsx"));
const Experience = lazy(() =>
    import("/src/conponents/experience/Experiences.jsx")
);

const LOTTIE_URL = "/assets/lotties/greeting-lottie.json";

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
                        <LazyLottie lottieId="greeting-lottie" animationUrl={LOTTIE_URL} />
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
