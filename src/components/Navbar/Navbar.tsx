import { useEffect, useRef, useState } from "react";
import { menuItems, scrollToSection } from "../../constants/constants";

const BigMenu = () => {
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
    <div className="hidden above-1440:flex relative navigation  set-zIndex">
      <div
        className="w-[2px] bg-orangePrimary absolute h-5 left-0 z-50 transition-all duration-500"
        style={{
          top: `${
            hoveredMenu ? hoveredMenu * ((height + 12) / menuItems.length) : 0
          }px`,
          height: `${
            menuItemHeight +
            menuItems[hoveredMenu ? hoveredMenu : 0].subItems.length * 25
          }px`,
        }}
      ></div>
      <div className="above-1440:min-h-[340px] min-h-[270px] relative">
        <div className="flex flex-col gap-1 above-1440:gap-2 relative pl-1">
          <div
            className="bg-whiteTextSecond w-[1px] absolute bottom-0 top-0 opacity-50 left-[0px]"
            ref={elementRef}
          ></div>
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="font-azeretMono font-light text-[12px] above-1440:text-base text-darkText pl-[12px]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="" ref={menuItemRef}>
                <div
                  className="cursor-pointer tracking-[0.5px] leading-[12.8px] "
                  onClick={
                    menu.src.length < 2
                      ? () => scrollToSection(menu.src)
                      : () => window.open(menu.src, "_blank")
                  }
                >
                  {menu.title}
                </div>
                <div
                  className={`text-whiteTextSecond sub-menu-items h-0 flex flex-col mt-2 overflow-hidden hover:transition-all duration-500`}
                  style={{
                    height:
                      hoveredMenu === index && menu.subItems.length > 0
                        ? `${menu.subItems.length * 24}px`
                        : "0px",
                  }}
                >
                  {menu.subItems.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="cursor-pointer text-[12px] above-1440:text-[16px] font-normal font-azeretMono"
                      onClick={() => window.open(sub.src, "_blank")}
                    >
                      {sub.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SmallMenu = () => {
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
    <div className={`above-1440:hidden relative navigation flex set-zIndex`}>
      <div
        className="w-[2px] bg-orangePrimary absolute h-5 left-0 z-50 transition-all duration-500"
        style={{
          top: `${
            hoveredMenu ? hoveredMenu * ((height + 2) / menuItems.length) : 0
          }px`,
          height: `${
            menuItemHeight +
            menuItems[hoveredMenu ? hoveredMenu : 0].subItems.length * 20
          }px`,
        }}
      ></div>
      <div className="min-h-[240px] below-430:min-h-[270px] relative">
        <div className="flex flex-col gap-1 below-430:gap-3 relative pl-1">
          <div
            className="bg-whiteTextSecond w-[1px] absolute bottom-0 top-0 opacity-50 left-[0px]"
            ref={elementRef}
          ></div>
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="font-azeretMono text-[12px] text-darkText pl-[12px] "
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="" ref={menuItemRef}>
                <div
                  onClick={
                    menu.src.length < 2
                      ? () => scrollToSection(menu.src)
                      : () => window.open(menu.src, "_blank")
                  }
                  className="cursor-pointer tracking-[1px] leading-[13px]"
                >
                  {menu.title}
                </div>
                <div
                  className={`text-whiteTextSecond sub-menu-items h-0 flex flex-col mt-1 overflow-hidden hover:transition-all duration-500 `}
                  style={{
                    height:
                      hoveredMenu === index && menu.subItems.length > 0
                        ? `${menu.subItems.length * 18}px`
                        : "0px",
                  }}
                >
                  {menu.subItems.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="cursor-pointer text-[12px] font-light font-azeretMono "
                    >
                      {sub.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex border-b  border-darkText  above-1440:pb-[355px] pb-[150px] below-1024:pb-[100px] ">
      <div className="left-side w-full">
        <div className="header above-1440:mb-10 mb-[26px]">
          <img src="/assets/images/logo/muonLogo.svg" alt="" />
        </div>

        <BigMenu />
        <SmallMenu />

        <div className=" w-full relative set-zIndex mb-[54px] below-1024:mb-[30px]">
          <div className="text-whiteTextSecond below-1024:text-base text-2xl sm:text-[44px] above-1440:text-[58px] above-1440:leading-[70px] leading-5 sm:leading-[50px] font-dosis font-normal">
            General-Purpose, <br /> Request-Based Validation Layer
          </div>
          <div className="text-[24px] below-1024:text-sm above-1440:text-[32px] above-1440:leading-[42px] text-whiteTextSecond leading-5 mt-[22px] font-dmSans  opacity-60">
            Powering the Intent-Centric Economy of the Future
          </div>
        </div>

        <div
          onClick={() =>
            window.open(
              "https://github.com/muon-protocol/muon-node-js/blob/testnet/src/built-in-apps/app-deployment.js",
              "_blank"
            )
          }
          className="group-hover set-zIndex btn relative hover:text-darkText transition-all duration-300 hover-div ease-in-out"
        >
          <span className="z-50 opacity-90 transition-all duration-300 ease-in-out  group-hover:delay-500">
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
        className="w-full absolute muon-gif below-430:top-[48px] top-[30px] -right-24 sm:-top-[40px] sm:-right-36 custom-1024:-top-20 custom-1024:-right-[300px] z-0 above-1024:-right-[400px]  above-1024:-top-16"
        alt=""
      />
    </div>
  );
};

export default Navbar;

// above-1024:-right-72 above-1024:w-[1440px] above-1024:h-[826px]  above-1024:top-1
