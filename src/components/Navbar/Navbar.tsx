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

  const menuItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div className={`flex  relative navigation  set-zIndex`}>
      <div
        className="w-[2px] bg-orangePrimary absolute h-7 left-0 z-50 transition-all duration-500"
        style={{
          top: `${
            hoveredMenu ? hoveredMenu * ((height + 12) / menuItems.length) : 0
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
              className="font-azeretMono font-medium text-sm above-1440:text-[18px] text-darkText pl-[12px]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex gap-7 h-8 items-center" ref={menuItemRef}>
                <div
                  className="cursor-pointer tracking-[0.5px] leading-[12.8px]"
                  onClick={
                    menu.src.length < 2
                      ? () => scrollToSection(menu.src)
                      : () => window.open(menu.src, "_blank")
                  }
                >
                  {menu.title}
                </div>
                <div
                  className={`text-whiteTextSecond sub-menu-items ${
                    menu.id == hoveredMenu ? "flex" : "hidden"
                  }  gap-5 above-1440:gap-6 overflow-hidden hover:transition-all duration-500`}
                  // style={{
                  //   height:
                  //     hoveredMenu === index && menu.subItems.length > 0
                  //       ? `${menu.subItems.length * 24}px`
                  //       : "0px",
                  // }}
                >
                  {menu.subItems.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="cursor-pointer hover:underline text-sm above-1440:text-[16px] font-medium font-azeretMono"
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="hidden md:flex border-b border-darkText above-1440:pb-[355px] pb-[150px] below-1024:pb-[100px]">
        <div className="left-side w-full">
          <div className="header above-1440:mb-10 mb-[26px] -ml-5">
            <img src="/assets/images/logo/muonLogo.svg" alt="" />
          </div>

          <BigMenu />
          <div className=" w-full relative set-zIndex mb-[54px] below-1024:mb-[30px]">
            <div className="text-whiteTextSecond below-1024:text-base text-2xl sm:text-[44px] above-1440:text-[58px] above-1440:leading-[70px] leading-5 sm:leading-[50px] font-dosis font-normal">
              General-Purpose, <br /> Request-Based Validation Layer
            </div>
            <div className=" inline-flex flex-col items-end">
              <div className="text-[24px] below-1024:text-sm above-1440:text-[32px] above-1440:leading-[42px] text-whiteTextSecond leading-5 mt-4 lg:mt-[40px] font-dmSans  !font-normal">
                Powering the Intent-Centric Economy of the Future
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/animation/muonGif.webp"
          className="w-full absolute muon-gif below-430:top-[48px] top-[30px] -right-24 sm:-top-[40px] sm:-right-36 custom-1024:-top-20 custom-1024:-right-[300px] z-0 above-1024:-right-[400px]  above-1024:-top-16"
          alt=""
        />
      </div>

      <div className="flex flex-col md:hidden -mt-8  border-darkText border-b pb-[121px]">
        <div
          onClick={() => handleOpenMenu()}
          className="flex items-center justify-between w-full"
        >
          <div className="gap-1 flex flex-col">
            <div className="bg-darkText w-4 h-[2px]"></div>
            <div className="bg-darkText w-4 h-[2px]"></div>
            <div className="bg-darkText w-4 h-[2px]"></div>
          </div>
          <img src="/assets/images/logo/muonLogo.svg" alt="" />
        </div>
        <img
          src="./assets/animation/muonGif.webp"
          className=" muon-gif mt-10"
          alt=""
        />
        <div className="text-whiteText flex flex-col items-center justify-center mt-16">
          <div className="text-[20px] font-normal ">
            General-Purpose,Request-Based, Validation Layer
          </div>
          <div className="text-[12px] mt-5">
            Powering the Intent-Centric Economy of the Future
          </div>
        </div>
      </div>

      {/* <div className="fixed flex top-0 bottom-0 left-0 right-0 bg-[#8E8888] z-[1000]">
        <img
          className="w-[14px] h-[14px]"
          src="/assets/images/menu/close.svg"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Navbar;

// above-1024:-right-72 above-1024:w-[1440px] above-1024:h-[826px]  above-1024:top-1
