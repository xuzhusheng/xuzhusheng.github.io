import Lottie from "lottie-react";
import greetingLottie from "../../assets/lottie/greetingLottie.json";

export default function GreetingLottie() {
    return <Lottie animationData={greetingLottie} loop={true} />;
}
