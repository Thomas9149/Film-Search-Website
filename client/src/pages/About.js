import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

import Header from "../components/Header";
function About() {
  useEffect(() => {
    const splitText = new SplitType("#text", { type: "chars, words" });
    const characters = splitText.words; // Array of all characters

    // Initial position setup
    gsap.set(characters, { y: "100%" });

    // Animation with GSAP
    gsap.to(characters, {
      y: "0%",
      stagger: 0.2, // Stagger animation for each character
      delay: 0.5, // Delay before animation starts
      duration: 0.5, // Duration of the animation
      ease: "power2.out", // Easing function
    });

    const splitTextWord = new SplitType("#word", { type: "chars, words" });
    const word = splitTextWord.words;
    gsap.set(word, { y: "-300%" });
    gsap.to(word, {
      y: "0%",
      stagger: 0.2, // Stagger animation for each character
      delay: 1, // Delay before animation starts
      duration: 3, // Duration of the animation
      ease: "power2.out", // Easing function
    });
  });
  return (
    <div className="flex flex-col h-screen flex-grow bg-about-bg4 bg-cover bg-center">
      <Header pageBackground="bg-gray-700"></Header>
      <div className="flex justify-center items-center  mt-12 flex-grow flex-col">
        <div
          id="word"
          className="text-[120px] text-black font-mono p-12"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          FilmSearch
        </div>
        <div
          id="text"
          className="text-5xl text-black font-mono"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          The Way Of The Future
        </div>
      </div>
    </div>
  );
}

export default About;
