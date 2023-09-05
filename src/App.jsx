import Features from "./sections/Features";
import Header from "./sections/Header";
import OurProgram from "./sections/OurProgram";
import Navbar from "./components/Navbar"
import HeaderMobile from "./sections/HeaderMobile";
import JoinOurPrograms from "./sections/JoinOurPrograms";
import Partners from "./sections/Partners";
import OurKeyActivities from "./sections/OurKeyActivities";

export default function App() {
  return (
    <>
      <Navbar />
      <HeaderMobile />
      <Header />
      <Partners />
      <Features />
      <OurProgram />
      <JoinOurPrograms />
      <OurKeyActivities />
    </>
  );
}
