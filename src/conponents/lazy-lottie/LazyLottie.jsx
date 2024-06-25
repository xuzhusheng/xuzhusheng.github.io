import { Suspense, lazy, useEffect, useState } from "react";
// import Lottie from "lottie-react";

const Lottie = lazy(() => import("lottie-react"));

// eslint-disable-next-line react/prop-types
export default function LazyLottie({ animationUrl }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(animationUrl);
            setData(await response.json());
        })();
    }, [animationUrl]);

    return (
        data && (
            <Suspense>
                <Lottie animationData={data} loop={true} />
            </Suspense>
        )
    );
}
