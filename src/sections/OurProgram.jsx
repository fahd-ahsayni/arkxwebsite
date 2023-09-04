import ReactLogo from "../assets/react.png";
import AngularLogo from "../assets/angular.png";
import NodeJsPicture from "../assets/ourPrograms/nodejs.png";
import mongoDbPicture from "../assets/ourPrograms/mongoDb.png";
import javaPicture from "../assets/ourPrograms/java.webp";
import springPictur from "../assets/ourPrograms/spring.jpg";
import ArrowSvg from "../assets/ourPrograms/scribble.svg";

export default function OurProgram() {
  return (
    <div className="py-16">
      <div className="m-auto px-6 mg:px-0 text-center mb-20 md:w-8/12 lg:w-6/12">
        <h2 className="text-4xl font-bold text-gray-800 md:text-center text-start">
          Our <span className="text-orange-500">Programs</span>
        </h2>
      </div>
      {/* START MERN STACK */}
      <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
        <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16">
          <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
            <h2 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
              Full-Stack JavaScript MERN
            </h2>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex justify-center items-center gap-4 rounded-full bg-sky-100 dark:bg-teal-900/20">
                  <img src={ReactLogo} className="h-8 w-auto" alt="react js" />
                </div>
                <div className="w-5/6">
                  <div className="relative">
                    <div className="absolute -left-2 w-full h-full bg-gradient-to-r from-sky-500/50 via-sky-500/20 to-transparent" />
                    <h4 className="font-semibold relative text-lg text-gray-700 dark:text-indigo-300">
                      Unleash the Power of MERN Stack
                    </h4>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    MongoDB, Express.js, React.js, and Node.js.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              With this powerful combination, you will be able to create{" "}
              <strong className="font-bold">modern &#127775;</strong> and{" "}
              <strong className="font-bold">high-performing &#9889;</strong>{" "}
              Websites and Web Applications.
              <br />
              <br />
              From data management to user interface responsiveness, our{" "}
              <strong className="font-bold">Full-Stack JS MERN</strong> Program
              equips you to master all aspects of web developmen
            </p>
          </div>
          <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
            <div className="col-span-2 relative row-span-4">
              <img
                src={mongoDbPicture}
                className="rounded-full"
                width={640}
                height={960}
                alt="shoes"
                loading="lazy"
              />
              <img
                src={ArrowSvg}
                className="h-24 w-auto absolute right-8 top-2/4 rotate-[20deg]"
                alt=""
              />
            </div>
            <div className="col-span-2 relative flex justify-center items-center row-span-2">
              <div className="w-28 bg-sky-200 filter blur-2xl rounded-full h-28 absolute" />
              <img
                src={ReactLogo}
                className="h-28 w-auto animate-spin-slow rounded-xl object-cover object-top"
                width={640}
                height={640}
                alt="react js"
                loading="lazy"
              />
            </div>
            <div className="col-span-3 py-4 row-span-3">
              <img
                src={NodeJsPicture}
                className="h-full w-full rounded-xl object-cover object-top"
                width={640}
                height={427}
                alt="shoes"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* END MERN STACK */}
      {/* START JAVA / ANGULAR */}
      <div className="container mt-28 m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
        <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16">
          <div className="mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
            <h2 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
              Full-Stack Angular, Java and Spring
            </h2>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex justify-center items-center gap-4 rounded-full bg-red-100 dark:bg-teal-900/20">
                  <img src={AngularLogo} className="h-8 w-auto" alt="react js" />
                </div>
                <div className="w-5/6">
                  <div className="relative">
                    <div className="absolute -left-2 w-full h-full bg-gradient-to-r from-red-500/50 via-red-500/20 to-transparent" />
                    <h4 className="font-semibold relative text-lg text-gray-700 dark:text-indigo-300">
                      Embrace the Potential of Angular & Java
                    </h4>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Empowering You to Build Robust and Dynamic Web Applications.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              With the winning combination of Angular, Java and Spring you will
              unlock the ability to create{" "}
              <strong className="font-bold">modern &#128165;</strong>,{" "}
              <strong className="font-bold">scalable &#128171;</strong>, and{" "}
              <strong className="font-bold">feature-rich &#127919;</strong> Web
              Applications.
              <br />
              <br />
              From Back-End development with{" "}
              <strong className="font-bold">Java</strong> and{" "}
              <strong className="font-bold">Spring</strong> to Front-End
              interactivity using <strong className="font-bold">Angular</strong>
              , our{" "}
              <strong className="font-bold">
                Full-Stack Angular, Java and Spring
              </strong>{" "}
              Program prepares you to excel in all aspects of Web Application
              Development.
            </p>
          </div>
          <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
            <div className="col-span-2 -bottom-20 relative flex justify-center items-center row-span-2">
              <div className="w-28 bottom-0 bg-red-200 filter blur-2xl rounded-full h-28 absolute" />
              <img
                src={AngularLogo}
                className="h-28 bottom-0 w-auto animate-pulse rounded-xl object-cover object-top"
                width={640}
                height={640}
                alt="react js"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 relative row-span-4">
              <img
                src={javaPicture}
                className="rounded-full"
                width={640}
                height={960}
                alt="shoes"
                loading="lazy"
              />
              <img
                src={ArrowSvg}
                className="h-24 -scale-x-[1] w-auto absolute -right-12 lg:-right-3 -bottom-20 rotate-[-20deg]"
                alt=""
              />
            </div>
            <div className="col-span-3 py-4 row-span-3">
              <img
                src={springPictur}
                className="h-full w-full rounded-xl object-cover object-top"
                width={640}
                height={427}
                alt="shoes"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* END JAVA / ANGULAR */}
    </div>
  );
}
