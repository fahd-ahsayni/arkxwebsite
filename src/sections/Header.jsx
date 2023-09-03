import ArrowSvg from "../assets/arrow.svg";
import RocketSvg from "../assets/rocket.svg";
import MessageBox from "../components/MessageBox";
import VideoMockUp from "../components/VideoMockUp";

import messages from "../data/messages";

export default function Header() {
  return (
    <section className="w-screen h-screen background-mesh">
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
            className="h-16 absolute top-20 -right-12 rotate-45 animate-pulse"
            alt="arrow"
          />
          <img
            src={RocketSvg}
            className="h-12 absolute -left-12 rotate-6"
            alt="rocket arkx"
          />

          <h3 className="font-bold mt-8 text-center text-5xl text-gray-50">
            Future-Proof
            <span className="w-1/2 font-bold text-5xl text-orange-500">
              {" "}
              Individuals
            </span>
          </h3>
          <p className="text-center text-lg pb-4 mt-6 text-gray-100">
            Make{" "}
            <span className="font-semibold rounded-b-[-50%] pb-2 text-white">
              world-class career
            </span>{" "}
            &#128640; pathways in technology accessible at scale.
          </p>
          <div className="mt-8 w-full flex justify-center items-center">
            <button className="bg-orange-500 transition-all duration-[0.5s] ease-out rounded px-8 py-2 text-white font-medium hover:shadow-lg hover:shadow-orange-600/40">
              About Ark-X
            </button>
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
