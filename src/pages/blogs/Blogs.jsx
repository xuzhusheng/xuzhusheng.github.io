import "./Blogs.css";
import { useEffect, useState } from "react";

const openURL = (url) =>
    window.open(url, "_blank", "noopener,noreferrer");

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("/blogs.json");
            const blogs = await response.json();
            setBlogs(blogs.items);
        })();
    }, []);

    const blogsCard = blogs.map((blog, key) => {
        const thumbnail = blog.content.match(/<img[^>]+src="([^">]+)"/)[1]
        const subtitle = blog.content.match(
            // eslint-disable-next-line no-useless-escape
            /(?<=\<h4>)(.*?)(?=\<)/g
        )[1];

        const pubDate = new Date(blog.published).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"}) 
        return (
            <div key={key} id="blog-card" onClick={() => openURL(blog.link)}>
                <div className="description">
                    <h3>{blog.title}</h3>
                    <p className="subtitle">{subtitle}</p>
                    <p className="date">{pubDate}</p>
                </div>

                <img className="thumbnail" src={thumbnail} />
            </div>
        );
    });

    return (
        <div id="blogs">
            <h2>Blogs</h2>
            {blogsCard}
        </div>
    );
}