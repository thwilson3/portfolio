"use client";
import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const navItems = [
  { link: `example.com`, text: "about" },
  { link: "example2.com", text: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section>
      <div className="h-auto w-screen bg-background py-2 text-white">
        <nav className="mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0">
          <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
            <a href="#">
              <div>thwilson3</div>
            </a>
            <div
              className={`mt-8 flex flex-col items-start space-y-8 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              {navItems.map((item, idx) => (
                <div key={idx} className="flex items-center font-semibold text-white">
                  <span className="mr-1 drop-shadow-whiteGlow">00{idx + 1}:</span>
                  <a
                    href={item.link}
                    key={idx}
                    className="ml-1 bg-primary rounded-full drop-shadow-primaryGlow p-1 outline outline-1 font-thin text-background transition duration-500 ease-in-out hover:text-black hover:drop-shadow-whiteGlow hover:bg-accent max-[991px]:block md:px-10 lg:px-4"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
            <HamburgerMenu toggleMenu={toggleMenu}/>
          </div>
        </nav>
      </div>
    </section>
  );
}
