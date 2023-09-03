import Features from "./sections/Features";
import Header from "./sections/Header";
import OurProgram from "./sections/OurProgram";
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <OurProgram />
    </>
  );
}
