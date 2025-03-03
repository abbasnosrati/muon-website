import { useState } from "react";
import BlackButton from "../common/Buttons/BlackButton";
const News = () => {
  const [selectedNews, setSelectedNews] = useState(0);
  const news = [
    {
      id: 0,
      date: "2024/5/6",
      title: "",
      shortText:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      text: "Verify, process & access your critical app-data on a permissionless oracle network and enjoy its fast modular security architecture.‍Verify, process & access your critical app-data on a permissionless oracle network and enjoy its fast modular security architecture.‍Verify, process & access your critical app-data on a permissionless oracle network and enjoy its fast modular security architecture.‍",
      imgSrc: "./assets/images/products/AIsafe.svg",
    },
    { id: 1, date: "2024/5/7", title: "", shortText: "", imgSrc: "", text: "" },
    { id: 2, date: "2024/5/8", title: "", shortText: "", imgSrc: "", text: "" },
    { id: 3, date: "2024/5/9", title: "", shortText: "", imgSrc: "", text: "" },
    {
      id: 4,
      date: "2024/5/10",
      title: "",
      shortText: "",
      imgSrc: "",
      text: "",
    },
  ];
  return (
    <div className="pb-[65px] border-b border-b-darkText font-azeretMono">
      <BlackButton btnText="04 // News" />
      <div className="flex flex-col lg:flex-row news-container w-full justify-between custom-1024:gap-10 above-1024:gap-[158px] above-1024::pr-[80px]">
        <div className="left-side left-scroll w-full sm:min-w-[364px] sm:max-w-[364px] above-1440:max-w-[484px] mt-3 flex flex-col gap-6 above-1440:gap-[45px] max-h-[385px] above-1440:max-h-[520px]  overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-orangePrimary [&::-webkit-scrollbar-track]:bg-gray-300">
          {news.map((item, index) => (
            <div
              onClick={() => setSelectedNews(index)}
              key={index}
              className={`border relative ml-2 cursor-pointer news-box border-darkText min-h-[112px] above-1440:min-h-[143px] p-[10px] text-darkTextOpacity ${
                selectedNews == index && "text-whiteTextSecond"
              } text-sm above-1440:text-[18px] below-1024:text-[12px] leading-4 flex flex-col gap-5`}
            >
              <div
                className={`opacity-70 ${
                  selectedNews == index ? "hidden" : "flex"
                }`}
              >
                {item.date}
              </div>
              <div
                className={`leading-[22px] opacity-70  ${
                  selectedNews == index ? "hidden" : "flex"
                }`}
              >
                {item.shortText}
              </div>
              <div
                className={`absolute  left-0 right-0 top-0 bottom-0 ${
                  selectedNews == index ? "flex" : "hidden"
                }`}
              >
                <img src={item.imgSrc} className="w-full h-full" />
              </div>
            </div>
          ))}
        </div>
        <div className="right-side flex flex-col items-center justify-center font-azeretMono w-full ">
          {news.map((item, index) => (
            <div
              key={index}
              className={` flex-col mt-10 ${
                item.id === selectedNews ? "flex" : "hidden"
              }`}
            >
              <div className="text-sm text-darkTextOpacity opacity-70 underline decoration-whiteTextSecond underline-offset-4">
                {item.date}
              </div>
              <div className="text-sm above-1440:text-[18px] relative text-darkTextOpacity opacity-70 above-1440:text-whiteTextSecond mt-4 max-w-[319px] above-1440:max-w-[412px]">
                <div className="absolute -left-3">-</div>
                {item.shortText}
              </div>
              <div className="text-[10px] above-1440:leading-[30px] above-1440:max-w-[688px] sm:text-sm lg:text-base above-1440:text-[22px] text-whiteTextSecond mt-20 below-1024:mt-10 leading-[18px]">
                {item.text.split(".").map((sentence, index) => (
                  <span key={index}>
                    {sentence}
                    {index < item.text.split(".").length - 1 && (
                      <>
                        . <br />
                      </>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="flex items-end w-full font-azeretMono justify-end text-sm text-darkTextOpacity above-1440:text-whiteTextSecond above-1440:underline opacity-70 above-1440:text-[18px] h-full above-1024:mr-24 above-1440:mr-48 ">
            <div className="flex items-center gap-2 cursor-pointer">
              View More
              <svg
                width="22"
                height="6"
                viewBox="0 0 33 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-fill-color"
              >
                <path
                  d="M33 3L28 0.113251L28 5.88675L33 3ZM-4.37114e-08 3.5L28.5 3.5L28.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
