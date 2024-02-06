"use client"

import Navabr from "./navbar";
import Hero1 from "./hero1";
import Hero2 from "./hero2";
import Footer from "./footer";
import { useEffect, useState } from 'react';


export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
      <div id="par" className=" bg-red-500 p-20 flex gap-4 flex-col  h-screen">
        <div className="nav"style={{ transform: `translateY(-${scrollPosition * 0.5}px)` }}>
          <Navabr />
        </div>
        <div className="flex gap-4  flex-row">
          <div className="hero1"style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}>
            <Hero1 />
          </div>
          <div className="hero2"style={{ transform: `translateY(-${scrollPosition * 0.7}px)` }}>
            <Hero2 />
          </div>
        </div>
        <div className="footer" style={{ transform: `translateY(-${scrollPosition * 0.9}px)` }}>
        <Footer />
        </div>
      </div>
      
    </>
  );
}
