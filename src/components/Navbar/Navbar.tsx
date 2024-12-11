import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const menuItems = [
    { id: "0", title: "What is Muon", subItems: [] },
    {
      id: "1",
      title: "Resources",
      subItems: ["Docs", "Articles", "Lightpaper"],
    },
    { id: "2", title: "Products", subItems: [] },
    { id: "3", title: "About us", subItems: [] },
  ];

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
    <div className="flex border-b border-darkText pb-48">
      <div className="left-side min-w-[36%]">
        <div className="header mb-12">
          <div className="">
            <img src="/assets/images/logo/muonLogo.svg" alt="" />
          </div>
        </div>
        <div className="relative navigation flex">
          <div
            className="w-[2px] bg-orangePrimary absolute h-5 left-0 z-50 transition-all duration-500"
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
          <div className="min-h-[200px]">
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
                    <div className="cursor-pointer">{menu.title}</div>
                    <div
                      className={`mt-2 text-white  sum-menu-items h-0 overflow-hidden hover:transition-all duration-500 ${
                        hoveredMenu === index &&
                        menu.subItems.length > 0 &&
                        "h-[50px]"
                      }`}
                    >
                      {menu.subItems.map((sub, subIndex) => (
                        <div key={subIndex} className="cursor-pointer ">
                          {sub}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[100px]">
          <div className="text-white text-3xl leading-10">
            Muon is the best thing that has happend <br /> since the slice of
            bread !
          </div>
          <div className="text-base text-white leading-5 mt-12">
            Verify, process & access your critical app-data on
            <br />
            a permissionless oracle network and enjoy its fast
            <br /> modular security architecture.‍
          </div>
        </div>

        <div className=" group-hover btn relative hover:text-white transition-all duration-300 hover-div ease-in-out">
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
            <path
              d="M33 3L28 0.113251L28 5.88675L33 3ZM-4.37114e-08 3.5L28.5 3.5L28.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z"
              // fill="#FF4518"
            />
          </svg>
        </div>
      </div>
      <div className="rite-side muon-gif relative w-full mt-20">
        <img
          src="./assets/animation/muonGif.gif"
          className="absolute top-0"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
