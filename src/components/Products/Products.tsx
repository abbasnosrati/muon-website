import { useState } from "react";
import BlackButton from "../common/Buttons/BlackButton";
import Partners from "../common/Parters/Partners";

const Products = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div id="4" className="pb-[200px] sm:pb-[270px] border-b border-b-darkText">
      <div>
        <BlackButton btnText="03 // Ecosystem" />
        <div className="section-title-text font-azeretMono">
          Muon’s versatile validation layer fuels innovative solutions across a
          wide range of use-cases. Here are some of the dApps built on Muon. 
        </div>
      </div>
      <div className="collapse-container mt-16 sm:mt-[90px] select-none">
        <div className="collapse-box-1">
          <div className="collapse-title" onClick={() => setSelectedItem(0)}>
            <p className="!border-b-0">DeRand</p>
          </div>
          <div
            className={`collapse-content flex below-1024:flex-col items-center font-azeretMono text-darkTextOpacity relative px-[68px] below-1024:px-5 ${
              selectedItem === 0
                ? "h-[243px] above-1440:h-[320px] below-1024:h-[550px] opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <div className="flex below-1024:flex-col w-full h-full items-center below-1024:!gap-2 gap-[50px] 1024-1279:gap-[25px]">
              <img
                className="w-[165px] h-[191px] above-1440:w-[218px] above-1440:h-[30px] 1024-1279:w-[100px] custom-1280:w-[150px]"
                src="./assets/images/products/derand-logo.svg"
                alt=""
              />
              <img
                className="w-[300px] h-[200px] above-1440:w-[450px] below-1024:-mt-24 above-1440:h-[154px] 1024-1279:w-[200px] custom-1280:w-[200px] above-1280:w-[310px]"
                src="./assets/images/products/derand-item.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col sm:flex-row h-full w-full justify-end below-1024:pb-20">
              <div className="right-side w-full flex flex-col gap-5 above-1440:gap-[50px] justify-center p-5 sm:p-0 below-1024:!w-full lg:max-w-[392px] above-1440:max-w-[494px]">
                <div className="font-azeretMono text-whiteTextSecond !leading-[28px] below-1024:!leading-5 opacity-70 text-[12px] sm:text-[14px] lg:text-base above-1440:text-[20px] 1024-1279:text-sm">
                  A modular, chain-agnostic and cost-efficient verifiable random
                  number generator that can be used with on-chain and off-chain
                  tools.
                </div>
                <div className="border cursor-pointer border-darkText font-dmSans leading-4 flex items-center w-full max-w-[364px] above-1440:max-w-[487px] h-[47px] above-1440:h-[58px] justify-between pl-3 pr-8">
                  <div
                    onClick={() => window.open("https://derand.dev/", "_blank")}
                    className="above-1440:text-[20px]"
                  >
                    Discover More
                  </div>
                  <svg
                    width="66"
                    height="8"
                    viewBox="0 0 66 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M65.3536 4.35355C65.5488 4.15829 65.5488 3.84171 65.3536 3.64645L62.1716 0.464466C61.9763 0.269204 61.6597 0.269204 61.4645 0.464466C61.2692 0.659728 61.2692 0.976311 61.4645 1.17157L64.2929 4L61.4645 6.82843C61.2692 7.02369 61.2692 7.34027 61.4645 7.53553C61.6597 7.7308 61.9763 7.7308 62.1716 7.53553L65.3536 4.35355ZM0 4.5H65V3.5H0V4.5Z"
                      fill="#242424"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="collapse-box-2">
          <div className="collapse-title" onClick={() => setSelectedItem(1)}>
            <p
              className={`${selectedItem == 1 ? "!border-b-0" : "!border-b-0"}`}
            >
              AI Safe
            </p>
          </div>
          <div
            className={`collapse-content ${
              selectedItem === 1
                ? "h-[243px] above-1440:h-[320px] below-1024:h-[510px] opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full px-16 below-1024:px-4">
              <EcosystemCard
                imageSrc={"./assets/images/products/AIsafe.svg"}
                content={
                  "The first secure wallet for agents. With access to trustless data, agents can interact with blockchain ecosystems and transact in a verifiably autonomous way. "
                }
                buttonSrc={"https://x.com/Auri_agent "}
                title="AI Safe"
              />
            </div>
          </div>
        </div>

        <div className="collapse-box-3">
          <div className="collapse-title" onClick={() => setSelectedItem(2)}>
            <p className="border-t !border-b-0">MetaBridge</p>
          </div>
          <div
            className={`collapse-content ${
              selectedItem === 2
                ? "h-[243px] above-1440:h-[320px] below-1024:h-[510px] opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full px-16 below-1024:px-4">
              <EcosystemCard
                imageSrc={"./assets/images/products/metabridge.svg"}
                content={
                  "Employing Muon as a chain-agnostic validation layer, this chain-independant bridge uses a novel approach for securing multi-chain transactions."
                }
                buttonSrc={"https://metabridge.space/"}
                title="MetaBridge"
              />
            </div>
          </div>
        </div>

        <div className="collapse-box-4">
          <div className="collapse-title" onClick={() => setSelectedItem(3)}>
            <p className="">LayerZero DVN</p>
          </div>
          <div
            className={`collapse-content ${
              selectedItem === 3
                ? "h-[243px] above-1440:h-[320px] below-1024:h-[510px] opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full px-16 below-1024:px-4">
              <EcosystemCard
                imageSrc={"./assets/images/products/layerzerodvn.svg"}
                content={
                  "A permissionless and chain-agnostic DVN (Decentralized Verifier Network) that leverages Muon Validation Layer to verify LayerZero transactions."
                }
                buttonSrc={
                  "https://github.com/meta-bridge-protocol/muon-layer0-dvn"
                }
                title="LayerZero DVN"
              />
            </div>
          </div>
        </div>

        <div className="collapse-box-6">
          <div
            className="collapse-title collapse-title-3 !border-t-0"
            onClick={() => setSelectedItem(5)}
          >
            FactGPT
          </div>
          <div
            className={`collapse-content ${
              selectedItem === 5
                ? "h-[243px] above-1440:h-[320px] below-1024:h-[510px] opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full px-16 below-1024:px-4">
              <EcosystemCard
                imageSrc={"./assets/images/products/factgpt.svg"}
                content={
                  "Leveraging Muon’s infrastructure, this framework allows projects to build custom prediction markets."
                }
                buttonSrc={
                  "https://github.com/muon-protocol/muon-apps/blob/2058a427bb53aca0a9b00967ba5a569bd59b91d6/general/factGPT.js#L4"
                }
                title="FactGPT"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] lg:mt-[200px]">
        <Partners />
      </div>
    </div>
  );
};

type EcosystemCardProp = {
  imageSrc: string;
  content: string;
  buttonSrc: string;
  title: string;
};

const EcosystemCard = ({
  title,
  imageSrc,
  content,
  buttonSrc,
}: EcosystemCardProp) => {
  return (
    <div className="flex below-1024:flex-col w-full items-center justify-between">
      <div className="w-full flex justify-center">
        <img
          className={`w-[300px] h-[200px] above-1440:w-[450px] below-1024:-mt-24 ${
            title == "MetaBridge" ? "" : "above-1440:h-[154px]"
          }  1024-1279:w-[200px] custom-1280:w-[200px] above-1280:w-[310px]`}
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="w-full max-w-[530px]">
        <div className="flex flex-col sm:flex-row h-full w-full justify-end">
          <div
            className={`right-side w-full flex flex-col gap-5 above-1440:gap-[50px] justify-center p-5 sm:p-0 below-1024:!w-full lg:max-w-[392px] ${
              title === "MetaBridge"
                ? "above-1440:max-w-[525px]"
                : title === "LayerZero DVN"
                ? "above-1440:max-w-[500px]"
                : "above-1440:max-w-[515px]"
            } `}
          >
            <div className="font-azeretMono text-whiteTextSecond !leading-[28px] below-1024:!leading-5 opacity-70 text-[12px] sm:text-[14px] lg:text-base above-1440:text-[20px] 1024-1279:text-sm">
              {content}
            </div>
            <div
              onClick={() => {
                window.open(buttonSrc, "_blank");
              }}
              className="border cursor-pointer border-darkText font-dmSans leading-4 flex items-center w-full max-w-[364px] above-1440:max-w-[487px] h-[47px] above-1440:h-[58px] justify-between pl-3 pr-8"
            >
              <div
                onClick={() => window.open(buttonSrc, "_blank")}
                className="above-1440:text-[20px]"
              >
                Discover More
              </div>
              <svg
                width="66"
                height="8"
                viewBox="0 0 66 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.3536 4.35355C65.5488 4.15829 65.5488 3.84171 65.3536 3.64645L62.1716 0.464466C61.9763 0.269204 61.6597 0.269204 61.4645 0.464466C61.2692 0.659728 61.2692 0.976311 61.4645 1.17157L64.2929 4L61.4645 6.82843C61.2692 7.02369 61.2692 7.34027 61.4645 7.53553C61.6597 7.7308 61.9763 7.7308 62.1716 7.53553L65.3536 4.35355ZM0 4.5H65V3.5H0V4.5Z"
                  fill="#242424"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
