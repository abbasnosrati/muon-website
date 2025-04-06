import { useState } from "react";
import BlackButton from "../common/Buttons/BlackButton";
import { DiscoverMoreBtn } from "../Products/Products";

const items = [
  {
    id: 0,
    scr: "/assets/images/whatIsMuon/3.svg",
    hover: "/assets/images/whatIsMuon/3Hover.svg",
  },
  {
    id: 1,
    scr: "/assets/images/whatIsMuon/2.svg",
    hover: "/assets/images/whatIsMuon/2Hover.svg",
  },
  {
    id: 2,
    scr: "/assets/images/whatIsMuon/1.svg",
    hover: "/assets/images/whatIsMuon/1Hover.svg",
  },
];

const MuonSection = () => {
  const handleHoveredItem = (item: any) => {
    setHoveredItem(item.id);
  };
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  return (
    <div className="font-azeretMono border-b border-darkText pb-[100px] sm:pb-[150px] ">
      <div>
        <BlackButton btnNum={"03"} btnText={"What is Muon"} />
      </div>

      <div className="flex flex-col sm:flex-row gap-16 sm:gap-[27px] items-center justify-center mt-14 sm:mt-24 mb-20">
        {items.map((item) => (
          <div
            onMouseEnter={() => handleHoveredItem(item)}
            className={`cursor-pointer ${item.id == 1 && "ml-0 sm:ml-3"}`}
            key={item.id}
          >
            <img src={hoveredItem == item.id ? item.hover : item.scr} />
          </div>
        ))}
      </div>

      <div className=" w-full flex justify-center items-center mt-4 above-1440:mt-[23px]">
        <div className="w-full flex-col max-w-[940px] items-center above-1440:max-w-[1320px] flex justify-center sm:items-end sm:justify-end">
          <DiscoverMoreBtn src="" btnText="Run a Node" />
          <DiscoverMoreBtn src="" btnText="More about Muon" />
        </div>
      </div>
    </div>
  );
};

export default MuonSection;
