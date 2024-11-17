import { useEffect, useState } from "react";

export default function(url, integrity, async = true, defer = true, crossOrigin = "anonymous"){
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");

        script.src = url;

        script.async = async;
        script.defer = defer;

        if (integrity) {
            script.integrity = integrity;
        }

        script.crossOrigin = crossOrigin;

        script.onload = () => setLoaded(true);
        
        document.body.appendChild(script);

        return () => document.body.removeChild(script);
    },  [url, integrity, async, defer, crossOrigin]);

    return loaded
}