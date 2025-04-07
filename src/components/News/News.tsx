import { useState } from "react";
import BlackButton from "../common/Buttons/BlackButton";
const News = () => {
  const [selectedNews, setSelectedNews] = useState(0);
  const news = [
    {
      id: 0,
      date: "April 9, 2025",
      title: <>Launch of Muon Protocol</>,
      description:
        "The long-anticipated Muon Protocol and its native token $MUON officially launched on April 9th on the Avalanche network.",
      text: "To ensure a smooth transition from Pion and minimize disruption for our dedicated community, Pion nodes and PION/bonPION tokens are  automatically migrated by the Muon team.",
      imgSrc: "./assets/images/news/0.svg",
      bgImgSrc: "./assets/images/news/0Big.svg",
      imgSrcSelected: "./assets/images/news/0Selected.svg",
      src: "https://x.com/muon_net/status/1900578193238831204",
    },
    {
      id: 1,
      date: "March 10, 2025",
      title: <>Muon is Moving to Avalanche!</>,
      description:
        "The community has spoken;following a successful Snapshot vote, Muon will launch on AVAX on April 9th.",
      imgSrc: "./assets/images/news/1.svg",
      bgImgSrc: "./assets/images/news/1Big.svg",
      imgSrcSelected: "./assets/images/news/1Selected.svg",
      text: "This marks the beginning of an exciting new chapter as we integrate deeper into the Avalanche ecosystem. ",
      src: "https://x.com/muon_net/status/1899143315167293816",
    },
    {
      id: 2,
      date: "March 4, 2025",
      title: <>MuonDVN is Live</>,
      description:
        "MuonDVN is already live on 10 chains, expanding trustless interoperability in the LayerZero ecosystem.",
      imgSrc: "./assets/images/news/2.svg",
      bgImgSrc: "./assets/images/news/2Big.svg",
      imgSrcSelected: "./assets/images/news/2Selected.svg",
      text: "The Muon DVN on LayerZero is now live, offering a decentralized, configurable, chain-agnostic, permissionless, and trustless solution for data validation. MuonDVN is already live on 10 chains, expanding trustless interoperability in the LayerZero ecosystem.",
      src: "https://x.com/muon_net/status/1895464516118569178",
    },
  ];
  return (
    <div className=" sm:pb-[65px] font-azeretMono">
      <BlackButton btnNum={"04"} btnText="News" />
      <div className="flex flex-col lg:flex-row news-container w-full custom-1024:gap-10 mt-[30px]">
        <div className="left-side left-scroll w-full sm:min-w-[364px] sm:max-w-[567px] above-1440:max-w-[758px] flex flex-col gap-[19px] above-1440:gap-[25px] max-h-[636px] above-1440:max-h-[836px]  overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-orangePrimary [&::-webkit-scrollbar-track]:bg-gray-300">
          {news.map((item, index) => (
            <div
              onClick={() => setSelectedNews(index)}
              key={index}
              className={`border relative  ${
                selectedNews == index ? "bg-newsHoverColor" : ""
              } cursor-pointer news-box border-darkText min-h-[160px] sm:min-h-[196px] above-1440:min-h-[262px] p-[15px] above-1440:p-[25px] text-whiteTextSecond text-sm above-1440:text-[18px] below-1024:text-[12px] leading-4 flex flex-col justify-end gap-[5px] sm:gap-5`}
            >
              <img
                src={selectedNews == index ? item.imgSrcSelected : item.imgSrc}
                className={`absolute ${
                  index === 2
                    ? "-top-[14px] sm:-top-[26px] above-1440:top-0"
                    : "top-0"
                } right-0 top-0 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] above-1440:w-auto  above-1440:h-auto`}
                alt=""
              />
              <div
                className={`opacity-70 text-[10px] sm:text-sm above-1440:text-[18px]`}
              >
                {item.date}
              </div>
              <div
                className={`leading-[16px] text-[13px] sm:text-[18px] above-1440:text-[24px] font-semibold`}
              >
                {item.title}
              </div>
              <div
                className={`leading-[16px] sm:leading-[22px] above-1440:leading-[28px] text-[10px] sm:text-sm above-1440:text-[18px] above-1440:font-medium tracking-[1px]`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
        <div className="right-side relative bg-newsHoverColor flex flex-col h-[428px] lg:h-[627px] above-1440:h-[836px] px-2 sm:px-[28px] above-1440:px-[49px] mt-10 lg:mt-0 font-azeretMono w-full border border-darkText">
          {news.map((item, index) => (
            <div
              key={index}
              className={`pb-[70px] sm:pb-[100px] above-1440:pb-24 mt-[102px] sm:mt-[270px] above-1440:mt-[348px] h-full ${
                item.id === selectedNews ? "flex flex-col" : "hidden"
              }`}
            >
              <img
                src={item.bgImgSrc}
                className={`absolute right-0 ${
                  index == 2
                    ? "above-1440:top-0 -top-[25px] sm:-top-[64px]"
                    : "top-0"
                } top-0 w-[100px] h-[100px] sm:h-[250px] sm:w-[250px] above-1440:w-auto above-1440:h-auto`}
                alt=""
              />
              <div className="text-[10px] above-1440:mb-1 sm:text-sm above-1440:text-[18px] text-whiteTextSecond font-normal decoration-whiteTextSecond ">
                {item.date}
              </div>
              <div className="text-[13px] above-1440:mb-1 sm:text-sm above-1440:text-[24px] font-bold relative text-whiteTextSecond mt-2 above-1440:mt-4">
                {item.title}
              </div>
              <div className="text-[10px] sm:text-sm above-1440:text-[18px] above-1440:leading-[32px] relative text-whiteTextSecond above-1440:font-semibold  above-1440:mt-4 max-w-[500px] mt-2 above-1440:max-w-[612px]">
                {item.description}
              </div>
              <div className="flex-grow"></div>
              <div className="text-[10px] above-1440:leading-[34px] above-1440:max-w-[688px] sm:text-sm  above-1440:text-[20px] font-normal sm:font-medium text-whiteTextSecond  leading-[18px]">
                {item.text}
              </div>
              <div className="flex w-full justify-center">
                <div
                  className="flex items-center gap-2 cursor-pointer sm:bottom-[25px] absolute bottom-[14px] sm:right-[25px]"
                  onClick={() => window.open(item.src, "_blank")}
                >
                  <img
                    className="w-6 h-6 sm:w-[34px] sm:h-[34px]"
                    src="/assets/images/news/viewMore.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
