// Header.jsx
import React from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import Typed from 'typed.js';

const Header = () => {
  // Use ref instead of id
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Engineer", "Web Developer", "Student", "Only Child", "Software Developer", "Sophomore in College", "Full Stack Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="lg:flex">
      <div className="fixed top-0 left-0 w-full z-10 bg-blue-950">
        <nav className="flex flex-row justify-between items-center px-8 py-4">
          <img className="h-9 md:h-12" src="/img/v-logo.svg" alt="Logo" />
          <div>
            <nav className="flex flex-row justify-center items-center h-17vh">
              <div className="hidden md:block">
                <ul className="flex gap-10 list-none text-lg font-bold">
                  <li><a className="hover:underline" href="#About">About</a></li>
                  <li><a className="hover:underline" href="#Experience">Experience</a></li>
                  <li><a className="hover:underline" href="#Projects">Projects</a></li>
                  <li><a className="hover:underline" href="#Contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <div className="absolute top-0 right-0">
              <nav className="justify-end px-8 py-4">
                <ul>
                  <li className="lg:hidden md:hidden icon-large"><a href="#"><FaBarsStaggered className="icon-large" /></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex min-h-screen w-full flex-col pb-40 pt-80 align-middle justify-center">
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-1">
          <h1 className="text-2xl font-bold leading-tight md:text-4xl">Hey, I'm Vishwas Patel</h1>
          <span className="text-xl text-blue-200 leading-tight md:text-3xl">
            {/* Reference the span for Typed.js */}
            <span ref={el}></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
