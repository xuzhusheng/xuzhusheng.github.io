import { useEffect, useState } from "react";
import "./Projects.css";

import { config, library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";

config.autoReplaceSvg = "nest";

library.add(faCodeFork, faStar);
dom.watch();

const openURL = (url) =>
    window.open(url, "_blank", "noopener,noreferrer");

export default function Projects() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("/profile.json");
            const profile = await response.json();
            setRepositories(profile.data.user.pinnedItems.edges);
        })();
    }, []);

    const repositoriesCard = repositories.map((repo) => {
        const node = repo.node;
        return (
            <div key={node.id} className="project-card" onClick={() => openURL(node.url)}>
                <h3>{node.name}</h3>
                <p>{node.description}</p>
                <div className="statistics">
                    <span className="fork">
                        <i className="fa-solid fa-code-fork"></i>
                        {node.forkCount}
                    </span>

                    <span className="star">
                        <i className="fa-solid fa-star"></i>
                        {node.stargazers.totalCount}
                    </span>

                    <span className="language">
                        <span
                            className="language-color"
                            style={{
                                backgroundColor: node.primaryLanguage.color,
                            }}
                        />
                        {node.primaryLanguage.name}
                    </span>
                </div>
            </div>
        );
    });

    return (
        <div className="section container">
            <h2>Featured Projects</h2>
            <div className="section projects-container">{repositoriesCard}</div>
        </div>
    );
}
