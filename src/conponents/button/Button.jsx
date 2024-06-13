import "./Button.css"
// import PropTypes from "prop-types";

// Button.propTypes = {
//     text: PropTypes.string,
//     href: PropTypes.string,
// };

// eslint-disable-next-line react/prop-types
export default function Button({text, href, download}) {
    return (
        <div>
            <a className="button" href={href} download={download}>
                {text}
            </a>
        </div>
    );
}

