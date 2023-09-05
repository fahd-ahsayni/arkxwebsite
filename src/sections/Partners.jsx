import CDGLogo from "../assets/partners/cdg.png";
import DXCLogo from "../assets/partners/dxc.png";
import CapgeminiLogo from "../assets/partners/capgemini.png";
import efeLogo from "../assets/partners/efe.png";
import AnapecLogo from "../assets/partners/anapec.png";
import GIZLogo from "../assets/partners/giz.png";
import LaStartUpStationLogo from "../assets/partners/laStartupStation.png";
import NMCLogo from "../assets/partners/mnc.png";
import TechnoparkLogo from "../assets/partners/technopark.png"
import AtosLogo from "../assets/partners/atos.png"

export default function Partners() {
  const partnersLogo = [
    DXCLogo,
    CDGLogo,
    efeLogo,
    GIZLogo,
    AnapecLogo,
    CapgeminiLogo,
    LaStartUpStationLogo,
    NMCLogo,
    TechnoparkLogo,
    AtosLogo
  ];
  return (
    <div className="relative flex lg:mt-72 mt-0 flex-col items-center overflow-hidden py-20 md:py-40">
      <div className="container relative z-[1] m-auto px-6 md:px-12">
        <div className="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
            ARKx is Supported by a Network of{" "}
            <span className="text-orange-500">World-Class</span> Partners
          </h2>
        </div>
        <div className="m-auto mt-16 md:w-11/12 lg:w-10/12 xl:w-7/12">
          <div className="flex flex-wrap justify-center gap-6">
            {partnersLogo.map((partnerLogo, key) => (
              <div
                key={key}
                className="group rounded-xl border border-gray-200 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={partnerLogo}
                  className="contrast-0 h-12 w-auto transition group-hover:contrast-100 cursor-pointer"
                  loading="lazy"
                  alt="logo airbnb"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
