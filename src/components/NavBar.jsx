import { Dropdown } from "flowbite-react";
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="mx-6 my-4 flex justify-center">
      <div className="container flex items-center justify-between">
        <div className="left-nav flex items-center gap-2">
          <div className="logo">
            <a href="/">
              <img src="/golex-logo.png" alt="golex-logo" className="hidden lg:block" />
              <img src="/Logo-mobile.svg" alt="" className="block lg:hidden"/>
            </a>
          </div>
          <div className="menu hidden lg:block hover:bg-slate-300 hover:bg-opacity-10 p-2 rounded-full hover:cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 0H9V6H15V0Z" fill="white" />
              <path d="M6 0H0V6H6V0Z" fill="white" />
              <path d="M6 9H0V15H6V9Z" fill="white" />
              <path d="M6 18H0V24H6V18Z" fill="white" />
              <path d="M15 9H9V15H15V9Z" fill="white" />
              <path d="M15 18H9V24H15V18Z" fill="white" />
              <path d="M24 0H18V6H24V0Z" fill="white" />
              <path d="M24 9H18V15H24V9Z" fill="white" />
              <path d="M24 18H18V24H24V18Z" fill="white" />

              <defs>
                <clipPath id="clip0_1_46">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
                <clipPath id="clip1_1_46">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <ul className=" text-white font-bold items-center gap-3 hidden lg:flex">
            <li>
              <a href="#" className="hover:text-[#d6357e]">
                Buy Crypto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d6357e]">
                Trade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d6357e]">
                Market
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d6357e]">
                Announcement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d6357e]">
                <img src="/usdt-logo.png" alt="usdt logo" />
              </a>
            </li>
          </ul>
        </div>
        <div className="right-nav flex gap-4 font-bold items-center">
          <a href="#" className="login hover:text-[#d6357e]">
            Login
          </a>

          <div className=" rounded-md bg-gradient-to-r from-purple-700 via-pink-500 via-red-500 to-yellow-500 p-[1px]">
            <a
              href="#"
              className="register hover:text-[#d6357e] px-4 py-1 bg-black rounded-md flex gap-2 justify-center"
            >
              <img src="/gift.svg" alt="" />
              Register
            </a>
          </div>
          <div className="menu block lg:hidden relative">
            <button
              onClick={() => {
                toggleMenu();
              }}
            >
              <img src="/menu.svg" alt="" />
            </button>
          </div>
          {menuOpen && (
            <>
              <div
                className="menu-animation absolute top-0 right-0  w-full bg-black bg-opacity-25 h-screen z-20"
                onClick={toggleMenu}
              ></div>
              <div className="menu-animation absolute top-0 right-0 h-screen w-3/4 bg-[#272727] z-30 px-7 py-10">
                <ul className="font-normal text-sm flex flex-col gap-7">
                  <li>
                    <a href="#" className="hover:text-[#d6357e]">
                      Buy Crypto
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#d6357e]">
                      Trade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#d6357e]">
                      Market
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#d6357e]">
                      Announcement
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#d6357e]">
                      <img src="/usdt-logo.png" alt="usdt logo" className=" w-20"/>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
          <div className="other-options hidden lg:flex gap-2 items-center">
            <div className="language hover:cursor-pointer">
              <svg
                className=" fill-white"
                width="20"
                height="20"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LanguageIcon"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
              </svg>
            </div>
            <Dropdown
              label="$ USD"
              className=" rounded-xl bg-slate-700 text-white border-0 hover:bg-slate-700"
              inline
            >
              <Dropdown.Item className=" bg-slate-700 text-white hover:bg-slate-500 hover:text-white rounded-xl">
                ₺ TRY
              </Dropdown.Item>
              <Dropdown.Item className=" bg-slate-700 text-white hover:bg-slate-500 hover:text-white rounded-xl">
                د.إ AED
              </Dropdown.Item>
              <Dropdown.Item className=" bg-slate-700 text-white hover:bg-slate-500 hover:text-white rounded-xl">
                S.R. SAR
              </Dropdown.Item>
              <Dropdown.Item className=" bg-slate-700 text-white hover:bg-slate-500 hover:text-white rounded-xl">
                $ USD
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
