import { useState } from 'react';
import { navLinks } from '../constants';
import { logo, hamburger, close } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative flex h-16 w-full items-center justify-between py-6">
      <img src={logo} alt="Intechnolife Logo" />
      <img
        src={toggle ? close : hamburger}
        alt="hamburger"
        onClick={() => setToggle((prev) => !prev)}
        className="h-[20px] w-[20px] object-contain md:hidden"
      />
      <ul
        className={`${
          toggle ? `flex` : `hidden`
        } absolute top-[70px] h-screen w-full flex-col bg-white md:static md:top-5 md:flex md:h-fit md:w-fit md:flex-row md:bg-transparent`}
      >
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="py-2 text-base font-normal  md:flex-auto md:justify-end md:py-0 md:px-5"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
