import { useState } from "react";
import BlackButton from "../common/Buttons/BlackButton";

const structureItems = [
  {
    id: 0,
    title: "02.1 Muon Network",
    titleImgSrc: "./assets/images/structure/muon-network.svg",
    description:
      "A decentralized network of nodes that deploy and run MuonApps. Each app runs on a dynamic subnet where nodes collaborate to operate and provide TSS signatures as proof, verifiable on-chain and off-chain.",
    descriptionImgSrc: " ./assets/images/structure/muon-ill-network.svg",
  },
  {
    id: 1,
    title: "02.2 MuonApp",
    titleImgSrc: "./assets/images/structure/muon-app.svg",

    description: `MuonApps are applications that projects can develop and deploy on the network to run their micro-
    validators. Unlike smart contracts, which operate on the blockchain and are isolated from real-world
    data, MuonApps have access to real-world data and function similarly to services running on a computer
    or cloud platform.`,
    descriptionImgSrc: "./assets/images/structure/muon-apps.svg",
  },
  {
    id: 2,
    title: "02.3 Muon Client SDK",
    titleImgSrc: "./assets/images/structure/muon-sdk.svg",

    description:
      "Muon provides an SDK containing smart contract libraries that allow dApps to verify proofs on-chain. This verification is chain-agnostic, meaning it can be performed on any blockchain.",
    descriptionImgSrc: " ./assets/images/structure/muon-sdk-content.svg",
  },
  {
    id: 3,
    title: "02.4 Muon Security",
    titleImgSrc: "./assets/images/structure/muon-security.svg",

    description: "",
    descriptionImgSrc: "./assets/images/structure/muon-security-stack.svg",
  },
];

const MuonStructure = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  return (
    <div
      id="2"
      className={`select-none border-b border-b-darkText text-whiteTextSecond ${
        selectedItem !== 3
          ? "padding-between-section"
          : "pb-[100px] below-1024:pb-[50px]"
      }`}
    >
      <div>
        <BlackButton btnText={"02 // Muon Structure"} />
        <div className="section-title-text"></div>
      </div>

      <div className="flex below-1024:flex-col justify-between">
        <div className="right-side flex  above-1440:gap-3 w-full below-1024:w-full max-w-[400px] above-1440:max-w-[500px]">
          <div>
            {structureItems.map((item, index) => (
              <div
                key={index}
                className={`${selectedItem === index ? "flex" : "hidden"}`}
              >
                <img
                  src={item.titleImgSrc}
                  className="w-[80%] below-1024:w-[60%] above-1440:w-full"
                />
              </div>
            ))}
          </div>
          <div className="structure-titles below-1024:text-[12px] below-1024:-ml-12 -ml-8 above-1440:ml-0 font-azeretMono text-sm above-1440:text-[18px] 1024-1279:text-[12px] font-light leading-[10px] flex flex-col gap-[14px] above-1440:gap-6 mt-[3px]">
            {structureItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === selectedItem ? "underline" : "text-darkText"
                } cursor-pointer text-nowrap`}
                onClick={() => setSelectedItem(index)}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-end above-1440:max-w-[620px] below-1024:w-full above-1280:max-w-[500px] 1024-1279:max-w-[250px] below-1024:my-5 ">
          {structureItems.map((item, index) => (
            <div
              key={index}
              className={`${
                selectedItem === index
                  ? "flex text-[12px] 1024-1279:text-[10px] above-1280:text-base !font-light below-1024:!leading-5 !leading-[28px] above-1440:text-[20px] font-azeretMono mr-5"
                  : "hidden"
              }  ${item.description.length == 0 && "hidden"}`}
            >
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex ">
          {structureItems.map((item, index) => (
            <div
              key={index}
              className={`${selectedItem === index ? "flex w-full" : "hidden"}`}
            >
              <img
                src={item.descriptionImgSrc}
                alt=""
                className={`max-w-[100%] above-1440:w-full below-1024:max-w-[60%] ${
                  selectedItem == 3 && "below-1024:max-w-[100%]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MuonStructure;
