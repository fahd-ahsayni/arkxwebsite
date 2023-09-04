import videoCover from "../assets/cover.jpg"

export default function VideoMockUp() {
  return (
    <div className="absolute -bottom-24 z-10">
      <div className="relative mt-12 w-[600px] h-[400px]">
        <div className="relative mx-auto w-full rounded-lg">
          <button
            type="button"
            className="relative shadow-2xl block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#fa4008] focus:ring-offset-2"
          >
            <span className="sr-only">Watch our video to learn more</span>
            <img className="w-full h-[350px]" src={videoCover} alt="" />
            <span
              className="absolute inset-0 flex h-full w-full items-center justify-center"
              aria-hidden="true"
            >
              <svg
                className="h-20 w-20 text-[#fa4008]"
                fill="currentColor"
                viewBox="0 0 84 84"
              >
                <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
