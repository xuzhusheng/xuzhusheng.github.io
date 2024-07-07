import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function LazyLottie({ animationUrl }) {
    const loaded = useRef(false)
    const container = useRef(null)

    useEffect(() => {
        let animation = null;

        (async () => {
            if (loaded.current) return;
            loaded.current = true;
            const lottieModule = import(
                "lottie-web/build/player/lottie_light"
            ).then((module) => module);
            const responseData = fetch(animationUrl).then(respons => respons.json())
            const [lottie, animationData] = await Promise.all([lottieModule, responseData]);
            animation = lottie.loadAnimation({
                container: container.current,
                // path: animationUrl,
                animationData: animationData,
                renderer: "svg",
                loop: true, // boolean
                autoplay: true, // boolean
                rendererSettings: {
                    progressiveLoad: true,
                },
            });
        })();

        return () => animation && animation.destroy();
    }, [animationUrl]);

    return <div ref={container}></div>;
}
