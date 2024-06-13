import "./SocialMedia.css";
import "@fortawesome/fontawesome-free/js/all.min";
import {SOCIAL_MEDIAS} from "../../portfolio"
// eslint-disable-next-line no-undef
FontAwesome.config.autoReplaceSvg = "nest";


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
