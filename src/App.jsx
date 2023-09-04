import Features from "./sections/Features";
import Header from "./sections/Header";
import OurProgram from "./sections/OurProgram";
import Navbar from "./components/Navbar"
import HeaderMobile from "./sections/HeaderMobile";

export default function App() {
  return (
    <>
      <Navbar />
      <HeaderMobile />
      <Header />
      <Features />
      <OurProgram />
    </>
  );
}
