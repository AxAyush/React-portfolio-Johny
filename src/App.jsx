import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
// <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
    <div className="fixed top-0 -z-10 h-full w-full">
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      </div> */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    </div>
      <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects/>
      <Contact />
      </div>
    </div>
  );
};

export default App;