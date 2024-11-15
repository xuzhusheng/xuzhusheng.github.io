import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// eslint-disable-next-line react/prop-types
export default function LazyLottie({ animationUrl }) {
    const loaded = useRef(false)
    const container = useRef(null)
    const startLoad = useIntersectionObserver(container, {
        rootMargin: "50%",
    });

    useEffect(() => {
        let animation = null;

        (async () => {
            if (!startLoad || loaded.current) return;
            loaded.current = true;
            // lottie_worker does not work on product mode
            const lottie = await import(
                "lottie-web/build/player/lottie_light"
            );
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
    }, [startLoad, animationUrl]);

    return <div ref={container}></div>;
}
