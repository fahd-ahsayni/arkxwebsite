import ArrowSvg from "../assets/arrow.svg";
import RocketSvg from "../assets/rocket.svg";
import MessageBox from "../components/MessageBox";
import VideoMockUp from "../components/VideoMockUp";
import messages from "../data/messages";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Header() {
  const [text] = useTypewriter({
    words: ["Individuals", "Organizations"],
    loop: 0,
    typeSpeed: 90,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <section className="w-screen hidden lg:block h-screen z-0 background-mesh">
      <div className="flex pt-32 flex-col justify-center items-center w-full h-full hero-pattern">
        <div className="max-w-7xl mx-auto relative">
          {messages.map((items, key) => (
            <MessageBox key={key} {...items} />
          ))}
          <h1 className="text-[84px] leading-[84px] max-w-2xl text-center font-bold text-white">
            Unleash Africa{"'"}s Tech Potential
          </h1>
          <img
            src={ArrowSvg}
            className="h-16 absolute top-20 -right-10 rotate-45 animate-pulse"
            alt="arrow"
          />
          <img
            src={RocketSvg}
            className="h-12 absolute -left-12 rotate-6"
            alt="rocket arkx"
          />

          <h3 className="font-bold mt-8 text-center text-5xl text-gray-50">
            Future-Proof{" "}
            <span
              className={`w-1/2 font-bold text-5xl text-orange-500`}
            >
              {text}
              <Cursor cursorColor="#fff" cursorStyle="_" />
            </span>
          </h3>
          <p className="text-center text-lg pb-4 mt-6 text-gray-100">
            Make{" "}
            <span className="font-semibold rounded-b-[-50%] pb-2 text-white">
              world-class career
            </span>{" "}
            &#128640; pathways in technology accessible at scale.
          </p>
          <div className="mt-16 w-full flex justify-center items-center">
            <button className="btn text-white btn-wide btn-primary hover:shadow-lg hover:shadow-orange-600/40 transition-all duration-[0.5s] ease-out">About Ark-X</button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center relative">
        {/* <div className="w-full left-0 right-0 -top-52 bg-gradient-to-t from-slate-900 to-transparent absolute h-96" /> */}
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#020513"
            fillOpacity="1"
            d="M0,64L80,96C160,128,320,192,480,218.7C640,245,800,235,960,202.7C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <VideoMockUp />
      </div>
    </section>
  );
}
