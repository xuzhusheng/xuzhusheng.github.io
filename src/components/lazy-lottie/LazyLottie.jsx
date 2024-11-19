import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useScript from "../../hooks/useScript";
import "./LazyLottie.css";

// eslint-disable-next-line react/prop-types
export default function LazyLottie({ animationUrl }) {
    const loaded = useRef(false)
    const container = useRef(null)
    const startLoad = useIntersectionObserver(container, {
        rootMargin: "50%",
    });

    const scriptLoaded = useScript(
        "/lottie_worker.min.js",
        "sha512-laz0XjFdhz5WXsqp5yJfK2mh7qX35DUW5bVNkbxSyP0GFkoNVcKqN4760GsW5VHPv0QWNQcVasia5wDFpx03Lg=="
    );

    useEffect(() => {
        if (!scriptLoaded) return;

        let animation = null;

        (async () => {
            if (!startLoad || loaded.current) return;
            loaded.current = true;
            // lottie_worker does not work on product mode
            // const lottie = await import(
            //     "lottie-web/build/player/lottie_canvas_worker.js"
            // );
            // eslint-disable-next-line no-undef
            animation = lottie.loadAnimation({
                container: container.current,
                path: animationUrl,
                // animationData: animationData,
                renderer: "svg",
                loop: true, // boolean
                autoplay: true, // boolean
                rendererSettings: {
                    progressiveLoad: true,
                },
            });
        })();

        return () => animation && animation.destroy();
    }, [scriptLoaded, startLoad, animationUrl]);

    return <div className="lottie" ref={container}></div>;
}
