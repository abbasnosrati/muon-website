import { useEffect, useRef, useState } from "react";
import { menuItems } from "../../constants/constants";
import ScrambleText from "../../helper/ScrambleText";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (index: any) => {
    setHoveredMenu(index);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const elementRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const [menuItemHeight, setMenuItemHeight] = useState(0);

  const menuItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.getBoundingClientRect().height);
    }
    if (menuItemRef.current) {
      setMenuItemHeight(menuItemRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div className="flex border-b relative border-darkText padding-between-section ">
      <div className="left-side w-full">
        <div className="header mb-12">
          <div className="">
            <img src="/assets/images/logo/muonLogo.svg" alt="" />
          </div>
        </div>
        <div className="relative navigation flex set-zIndex">
          <div
            className="w-[2px] bg-orangePrimary absolute h-5 left-0 z-50 transition-all duration-500 "
            style={{
              top: `${
                hoveredMenu
                  ? hoveredMenu * ((height + 20) / menuItems.length)
                  : 0
              }px`,
              height: `${
                menuItemHeight +
                menuItems[hoveredMenu ? hoveredMenu : 0].subItems.length * 15
              }px`,
            }}
          ></div>
          <div className="min-h-[200px]  relative ">
            <div className="flex flex-col gap-4 relative ">
              <div
                className="bg-white w-[2px] absolute bottom-0 top-0 opacity-50"
                ref={elementRef}
              ></div>
              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className="font-azeretMono text-xs text-darkText pl-[12px] "
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="" ref={menuItemRef}>
                    <div className="cursor-pointer">
                      <ScrambleText value={menu.title} />
                    </div>
                    <div
                      className={`mt-2 text-white  sum-menu-items h-0 overflow-hidden hover:transition-all duration-500 ${
                        hoveredMenu === index &&
                        menu.subItems.length > 0 &&
                        "h-[50px]"
                      }`}
                    >
                      {menu.subItems.map((sub, subIndex) => (
                        <div key={subIndex} className="cursor-pointer ">
                          <ScrambleText value={sub} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[100px] w-full relative set-zIndex mb-[68px]">
          <div className="text-white text-2xl sm:text-[42px] leading-7 sm:leading-[60px] font-dosis">
            General-Purpose, <br /> Request-Based Validation Layer
          </div>
          <div className="text-[20px] text-white leading-5 mt-8 font-dmSans opacity-70">
            Powering the Intent-Centric Economy of the Future
          </div>
        </div>

        <div className="group-hover set-zIndex btn relative hover:text-white transition-all duration-300 hover-div ease-in-out">
          <span className="z-50 transition-all duration-300 ease-in-out hover:text-white group-hover:delay-500">
            Build on Muon
          </span>
          <svg
            width="33"
            height="6"
            viewBox="0 0 33 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-fill-color"
          >
            <path d="M33 3L28 0.113251L28 5.88675L33 3ZM-4.37114e-08 3.5L28.5 3.5L28.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z" />
          </svg>
        </div>
      </div>
      <img
        src="./assets/animation/muonGif.webp"
        className="absolute muon-gif top-[30px] -right-24 sm:-top-[40px] sm:-right-36 custom-1024:-top-20 custom-1024:-right-[300px] z-0 above-1024:-right-72  above-1024:top-1"
        alt=""
      />
    </div>
  );
};

export default Navbar;

// above-1024:-right-72 above-1024:w-[1440px] above-1024:h-[826px]  above-1024:top-1
