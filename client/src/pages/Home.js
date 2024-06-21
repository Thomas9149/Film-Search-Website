import React, { useEffect } from "react";
import Header from "../components/Header";
import SplitType from "split-type";
import gsap from "gsap";

function Home() {
  useEffect(() => {
    // SplitText to break down text into characters
    const splitText = new SplitType("#text", { type: "chars, words" });
    const characters = splitText.chars; // Array of all characters

    // Initial position setup
    gsap.set(characters, { y: "100%" });

    // Animation with GSAP
    gsap.to(characters, {
      y: "0%",
      stagger: 0.05, // Stagger animation for each character
      delay: 0.5, // Delay before animation starts
      duration: 0.5, // Duration of the animation
      ease: "power2.out", // Easing function
    });
    const splitTextp = new SplitType("#para", { type: "chars, words" });
    const charactersp = splitTextp.chars; // Array of all characters

    // Initial position setup
    gsap.set(charactersp, { y: "100%" });

    // Animation with GSAP
    gsap.to(charactersp, {
      y: "0%",
      stagger: 0.05, // Stagger animation for each character
      delay: 0.5, // Delay before animation starts
      duration: 0.5, // Duration of the animation
      ease: "power2.out", // Easing function
    });
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col flex-grow bg-network-error bg-cover bg-center">
        <Header pageBackground="bg-gray-700"></Header>
        <div className="flex flex-col flex-grow justify-center items-center mb-[12vh]">
          <h1
            id="text"
            className="font-mono  text-8xl text-white"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            Search Now
          </h1>
          <p
            id="para"
            className="text-5xl text-white font-mono"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            Find Movies and TV Shows!
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
