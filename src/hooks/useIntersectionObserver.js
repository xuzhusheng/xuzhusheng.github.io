import { useState, useEffect } from "react";

export default function useIntersectionObserver(
    ref,
    options,
    triggerOnce = true
) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
            if (triggerOnce && entry.isIntersecting) {
                observer.disconnect();
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, options, triggerOnce]);

    return isIntersecting;
}
