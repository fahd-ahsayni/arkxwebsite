import ArrowSvg from "../assets/arrow.svg";
import RocketSvg from "../assets/rocket.svg";
import videoCover from "../assets/cover.jpg";

export default function HeaderMobile() {
  return (
    <div className="relative -z-0 block lg:hidden overflow-hidden background-mesh">
      <div className="relative pt-32 pb-16 sm:pb-24 lg:pb-32 hero-pattern">
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center relative md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <img
                src={ArrowSvg}
                className="h-12 absolute bottom-0 right-10 rotate-45 animate-pulse"
                alt="arrow"
              />
              <img
                src={RocketSvg}
                className="h-10 absolute bottom-0 left-8 rotate-6"
                alt="rocket arkx"
              />
              <h1 className="text-[50px] leading-[50px] max-w-2xl text-center font-bold text-white">
                Unleash Africa{"'"}s Tech Potential
              </h1>
              <h3 className="font-bold mt-4 text-center text-3xl text-gray-50">
                Future-Proof
                <span className="w-1/2 font-bold text-orange-500">
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
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img className="w-full" src={videoCover} alt="" />
                  <span
                    className="absolute inset-0 flex h-full w-full items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 w-20 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx={42}
                        cy={42}
                        r={42}
                        fill="white"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
