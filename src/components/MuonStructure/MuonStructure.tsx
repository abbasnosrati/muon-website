import { useState } from "react";
import BlackButton from "../common/Buttons/BlackButton";

const structureItems = [
  {
    id: 0,
    title: "02.1 Muon Network",
    titleImgSrc: "./assets/images/structure/muon-network.svg",
    description: "",
    descriptionImgSrc: "./assets/images/structure/muon-security-stack.svg",
  },
  {
    id: 1,
    title: "02.2 MuonApp",
    titleImgSrc: "./assets/images/structure/muon-app.svg",
    description:
      "A decentralized network of nodes that deploy and run MuonApps. Each app runs on a dynamic subnet where nodes collaborate to operate and provide TSS signatures as proof, verifiable on-chain and off-chain.",
    descriptionImgSrc: " ./assets/images/structure/muon-ill-network.svg",
  },
  {
    id: 2,
    title: "02.3 Muon Client SDK",
    titleImgSrc: "./assets/images/structure/muon-sdk.svg",
    description: `MuonApps are applications that projects can develop and deploy on the network to run their micro-
                    validators. Unlike smart contracts, which operate on the blockchain and are isolated from real-world
                    data, MuonApps have access to real-world data and function similarly to services running on a computer
                    or cloud platform.`,
    descriptionImgSrc: "./assets/images/structure/muon-apps.svg",
  },
  {
    id: 3,
    title: "02.4 Muon Security",
    titleImgSrc: "./assets/images/structure/muon-security.svg",
    description:
      "Muon provides an SDK containing smart contract libraries that allow dApps to verify proofs on-chain. This verification is chain-agnostic, meaning it can be performed on any blockchain.",
    descriptionImgSrc: " ./assets/images/structure/muon-sdk-content.svg",
  },
];

const MuonStructure = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  return (
    <div
      className={`select-none border-b border-b-darkText text-whiteTextSecond ${
        selectedItem !== 0 ? "padding-between-section" : "pb-[50px]"
      }`}
    >
      <div>
        <BlackButton btnText={"02 // Muon Structure"} />
        <div className="section-title-text"></div>
      </div>

      <div className="flex justify-between ">
        <div className="right-side flex gap-3  ">
          <div>
            {structureItems.map((item, index) => (
              <div
                key={index}
                className={`${selectedItem === index ? "flex" : "hidden"}`}
              >
                <img src={item.titleImgSrc} alt="" />
              </div>
            ))}
          </div>
          <div className="structure-titles text-[18px] font-normal leading-[10px] flex flex-col gap-6 mt-[3px]">
            {structureItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === selectedItem ? "underline" : "text-darkText"
                } cursor-pointer`}
                onClick={() => setSelectedItem(index)}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-end max-w-[599px]">
          {structureItems.map((item, index) => (
            <div
              key={index}
              className={`${
                selectedItem === index
                  ? "flex text-[20px] font-azeretMono"
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
              <img src={item.descriptionImgSrc} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MuonStructure;
