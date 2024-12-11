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
      imgSrc: "",
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
    <div className="pb-[100px] border-b border-b-darkText ">
      <BlackButton btnText="04 // News" />
      <div className="flex news-container w-full justify-between gap-[200px]">
        <div className="left-side  left-scroll w-full min-w-[364px]  max-w-[364px] mt-3 flex flex-col gap-6 max-h-[400px] overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-orangePrimary [&::-webkit-scrollbar-track]:bg-gray-300">
          {news.map((item, index) => (
            <div
              onClick={() => setSelectedNews(index)}
              key={index}
              className="border ml-2 cursor-pointer  news-box border-darkText min-h-[112px] p-[10px] text-darkTextOpacity text-sm leading-4 flex flex-col gap-5"
            >
              <div>{item.date}</div>
              <div>{item.shortText}</div>
            </div>
          ))}
        </div>
        <div className="right-side  flex items-center justify-center font-azeretMono w-full max-w-[605px] pr-10">
          {news.map((item, index) => (
            <div
              key={index}
              className={` flex-col pt-5 ${
                item.id === selectedNews ? "flex" : "hidden"
              }`}
            >
              <div className="text-sm text-darkTextOpacity opacity-70">
                {item.date}
              </div>
              <div className="text-sm text-darkTextOpacity opacity-70 mt-4">
                {item.shortText}
              </div>
              <div className="text-base text-darkText mt-10">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
