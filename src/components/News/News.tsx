import { useState } from "react";
import BlackButton from "../common/Buttons/BlackButton";
const News = () => {
  const [selectedNews, setSelectedNews] = useState(0);
  const news = [
    {
      id: 0,
      date: "December 15, 2025",
      title: (
        <>
          <span className="font-bold">Auri</span> powered by Muon AI-Safe.
        </>
      ),
      shortText: "An Autonomous AI Agent for Trustless Transactions.",
      text: "She transacts, Interacts and Transacts autonomously. In the upcoming phase, Auri will Manage a liquid token on an AI agent launchpad.",
      imgSrc: "./assets/images/products/AIsafe.svg",
      imgScrHover: "./assets/images/products/AIsafeHover.svg",
    },
    {
      id: 1,
      date: "December 16, 2025",
      title: (
        <>
          <span className="font-bold">MuonDVN</span>
        </>
      ),
      shortText:
        "Separation of Verification and Execution in Cross-Chain Transactions",
      imgSrc: "",
      imgScrHover: "",
      text: "Muon has been deployed as a LayerZero Decentralized Verification Network (DVN), introducing a trustless, modular and multichain framework for transaction validation",
    },
  ];
  return (
    <div className="pb-[65px] border-b border-b-darkText font-azeretMono">
      <BlackButton btnNum={"04"} btnText="News" />
      <div className="flex flex-col lg:flex-row news-container w-full  custom-1024:gap-10  mt-[30px]">
        <div className="left-side left-scroll w-full sm:min-w-[364px] sm:max-w-[567px] above-1440:max-w-[758px] flex flex-col gap-6 above-1440:gap-[45px] max-h-[485px] above-1440:max-h-[820px]  overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-orangePrimary [&::-webkit-scrollbar-track]:bg-gray-300">
          {news.map((item, index) => (
            <div
              onClick={() => setSelectedNews(index)}
              key={index}
              className={`border relative  ${
                selectedNews == index ? "bg-newsHoverColor" : ""
              } cursor-pointer news-box border-darkText min-h-[149px] sm:min-h-[196px] above-1440:min-h-[262px] p-[15px] above-1440:p-[27px] text-whiteTextSecond text-sm above-1440:text-[18px] below-1024:text-[12px] leading-4 flex flex-col justify-end gap-[5px] sm:gap-5`}
            >
              <div
                className={`opacity-70 text-[10px] sm:text-sm above-1440:text-[18px]`}
              >
                {item.date}
              </div>
              <div
                className={`leading-[22px] text-[13px] sm:text-[18px] above-1440:text-[24px] `}
              >
                {item.title}
              </div>
              <div
                className={`leading-[16px] sm:leading-[26px] above-1440:leading-[36px] text-[12px] sm:text-base above-1440:text-[22px] above-1440:font-medium tracking-[1px]`}
              >
                {item.shortText}
              </div>
              <div
                className={`absolute  left-0 right-0 top-0 bottom-0 ${
                  selectedNews == index ? "flex" : "hidden"
                }`}
              >
                {/* <img src={item.imgSrc} className="w-full h-full" /> */}
              </div>
            </div>
          ))}
        </div>
        <div className="right-side relative bg-newsHoverColor flex flex-col min-h-[415px] lg:h-[836px] items-center mt-10 lg:mt-0 font-azeretMono w-full border border-darkText">
          {news.map((item, index) => (
            <div
              key={index}
              className={` flex-col px-[22px]  mt-[120px] lg:mt-72 ${
                item.id === selectedNews ? "flex" : "hidden"
              }`}
            >
              <div className="text-[10px] sm:text-sm text-whiteText decoration-whiteTextSecond">
                {item.date}
              </div>
              <div className="text-[13px] sm:text-sm above-1440:text-[22px] relative text-whiteText mt-2 sm:mt-4">
                {item.title}
              </div>
              <div className="text-[12px] sm:text-sm above-1440:text-[22px] above-1440:leading-[36px] relative text-whiteText  mt-4 max-w-[319px] above-1440:max-w-[612px]">
                {item.shortText}
              </div>
              <div className="text-[11px] above-1440:leading-[30px] above-1440:max-w-[688px] sm:text-sm lg:text-base above-1440:text-[20px] font-normal sm:font-medium text-whiteTextSecond mt-40 below-1024:mt-8 leading-[18px]">
                {item.text}
              </div>
            </div>
          ))}
          <div className="absolute bottom-[10px] sm:bottom-[25px] sm:right-[25px]">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                className="w-6 h-6 sm:w-[34px] sm:h-[34px]"
                src="/assets/images/news/viewMore.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
