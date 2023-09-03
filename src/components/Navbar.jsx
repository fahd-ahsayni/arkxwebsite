import arkxLogo from "../assets/arkx.png";
import ReactLogo from "../assets/react.png";
import AngularLogo from "../assets/angular.png";
import JobinTechLogo from "../assets/jobintech.png"

export default function Navbar() {
  return (
    <div className="navbar flex items-center justify-center pt-8 absolute px-32">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-100 hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Ark-x Academy</a>
              <ul className="p-2">
                <li>
                  <a>Full Stack JavaScript ( MERN )</a>
                </li>
                <li>
                  <a>Full Stack Java, Spring & Angular</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost normal-case text-xl">
          <img
            src={arkxLogo}
            alt="ark x academy"
            className="h-12 -mt-4 w-auto"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-gray-100 text-base hover:text-white font-semibold">
              Home
            </a>
          </li>
          <li tabIndex={0} className="z-10">
            <details>
              <summary className="font-semibold text-base text-gray-100 hover:text-white">
                Ark-x Academy
              </summary>
              <ul className="p-2 w-80">
                <li>
                  <a className="font-semibold flex justify-start items-center w-full">
                    <img
                      src={ReactLogo}
                      alt="react js"
                      className="h-8 w-auto"
                    />
                    <span>Full Stack JavaScript (MERN)</span>
                  </a>
                </li>
                <li>
                  <a className="font-semibold flex justify-start items-center w-full">
                    {" "}
                    <img
                      src={AngularLogo}
                      alt="angular"
                      className="h-6 w-auto"
                    />
                    <span>Full Stack Java, Spring & Angular</span>
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="text-gray-100 hover:text-white font-semibold text-base">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">
          <img src={JobinTechLogo} alt="jobintech" className="h-8 w-auto"/>
        </a>
      </div>
    </div>
  );
}
