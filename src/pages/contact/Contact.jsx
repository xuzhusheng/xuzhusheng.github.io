import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ERRORS = {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    subject: "Please enter a subject.",
    message: "Please enter your message.",
};

const DEFAULT_FORM_DATA = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const DEFAULT_TOAST_MESSAGE = {
    display: true,
    message: "",
    type: "",
};

const TOAST_SUCCESS = "sucess";
const TOAST_DANGER = "danger";

export default function Contact() {
    const [errors, setErrors] = useState(ERRORS);
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
    const [toastMessage, setToastMessage] = useState(DEFAULT_TOAST_MESSAGE);

    const toast = (message, type, timeout = 3000) => {
        setToastMessage({ display: true, message: message, type: type });

        setTimeout(() => setToastMessage(DEFAULT_TOAST_MESSAGE), timeout);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (value.trim().length > 0) {
            setErrors((prevErrors) => {
                const errs = { ...prevErrors };
                delete errs[name];
                return errs;
            });
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: ERRORS[name],
            }));
        }
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setDisabled(true);
        const data = {};

        const formData = new FormData(e.target);
        for (const [key, value] of formData.entries()) {
            data[key] = value.trim();
        }
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                data,
                import.meta.env.VITE_EMAIL_API_PUBLIC_KEY
            );
            toast("Message sent.", TOAST_SUCCESS);
            setFormData(DEFAULT_FORM_DATA);
        } catch (e) {
            toast(
                "'Uh oh. Something went wrong. Please try again latter",
                TOAST_DANGER
            );
        }

        setDisabled(false);
    };

    return (
        <div id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail} noValidate>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={disabled}
                />

                {errors.name && <div className="error">{errors.name}</div>}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={disabled}
                />
                {errors.email && <div className="error">{errors.email}</div>}
                <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={disabled}
                />
                {errors.subject && (
                    <div className="error">{errors.subject}</div>
                )}
                <textarea
                    type="text"
                    placeholder="Type your message here..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={disabled}
                />
                {errors.message && (
                    <div className="error">{errors.message}</div>
                )}
                <input
                    type="submit"
                    value="Submit"
                    id="input-submit"
                    className="button"
                    disabled={disabled}
                />
            </form>
            {toastMessage.display && (
                <div className={"toast " + toastMessage.type}>
                    {toastMessage.message}
                </div>
            )}
        </div>
    );
}
