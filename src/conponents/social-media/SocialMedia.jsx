import "./SocialMedia.css";
import {SOCIAL_MEDIAS} from "../../portfolio"
import { config, library, dom } from "@fortawesome/fontawesome-svg-core";
import {
    faGithub,
    faLinkedinIn,
    faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

config.autoReplaceSvg = "nest";

library.add(faGithub, faLinkedinIn, faMedium, faEnvelope);
dom.watch();



const socialMediaLinks = SOCIAL_MEDIAS.map((media, key) => (
    <a
        key={key}
        href={media.link}
        className={"icon-button " + media.name}
        target="_blank"
        rel="noopener noreferrer"
    >
        <i className={media.icon}></i>
        <span></span>
    </a>
));

export default function SocialMedia() {
    return (
        <div className="social-media-div">
            {socialMediaLinks}
        </div>
    );
}
