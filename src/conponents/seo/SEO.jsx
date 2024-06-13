/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

export default function SEO({
    url,
    title,
    description,
    author,
    keywords,
    jsonSchema,
}) {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <meta name="keywords" content={keywords} />
            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url}></meta>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            {/* <meta name="twitter:creator" content={name} /> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url}></meta>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}

            <script type="application/ld+json">
                {JSON.stringify(jsonSchema)}
            </script>
        </Helmet>
    );
}
