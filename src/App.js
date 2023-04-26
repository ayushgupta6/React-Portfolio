import React, { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Skills from "./scenes/Skills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Testimonial from "./scenes/Testimonial";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";


function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage}
        setSlectedPage={setSelectedPage}
      />
      <div className=" w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage ={setSelectedPage} />
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto">
        <Skills />
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto mb-10">
        <Testimonial />
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
