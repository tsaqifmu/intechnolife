import { useState } from 'react';
import { navLinks } from '../constants';
import { logo, hamburger, close } from '../assets';
import styles from '../style';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative h-20 w-full items-center justify-between py-6 md:flex">
      <div
        className={`${styles.paddingX} flex w-full items-center justify-between`}
      >
        <img src={logo} alt="Intechnolife Logo" />
        <img
          src={toggle ? close : hamburger}
          alt="hamburger"
          onClick={() => setToggle((prev) => !prev)}
          className="h-[20px] w-[20px] object-contain md:hidden"
        />
      </div>
      <ul
        className={`${
          toggle ? `flex` : `hidden`
        } absolute top-[70px] z-50 h-screen w-full flex-col bg-white md:static md:top-5 md:flex md:h-fit md:w-fit md:flex-row md:bg-transparent `}
      >
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${styles.paddingX} whitespace-nowrap py-2 text-base font-normal md:justify-end md:px-5 md:py-0`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
