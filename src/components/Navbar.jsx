import { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants.index';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <a href="/">
        <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      </a>

      <ul className="sm:flex hidden justify-end items-center flex-1 gap-4">
        {navLinks.map((link, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white list-none ${
              index === navLinks.length - 1
                ? 'mr-0 text-gradient px-8 font-bold'
                : 'mr-10'
            }`}
            key={link.id}
          >
            <a href={`${link.id}`} target="blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={`${toggleMenu ? close : menu}`}
          alt="hamburger-menu"
          className="cursor-pointer w-[28px] h-[28px] object-contain"
          onClick={() => setToggleMenu((prev) => !prev)}
        />

        <div
          className={`${
            toggleMenu ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 w-full rounded-xl sidebar gap-4 justify-center`}
        >
          <ul className="flex flex-col justify-end items-center flex-1 gap-4">
            {navLinks.map((link, index) => (
              <li
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white list-none ${
                  index === navLinks.length - 1 ? 'text-gradient font-bold' : ''
                }`}
                key={link.id}
              >
                <a href={`${link.id}`} target="blank">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
