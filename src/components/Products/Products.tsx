import { ReactElement, useEffect, useRef, useState } from "react";
import BlackButton from "../common/Buttons/BlackButton";
import Partners from "../common/Parters/Partners";

interface DiscoverMoreBtnProp {
  src: string;
  btnText?: string;
  size?: string;
}

const items = [
  {
    id: 1,
    title: "Derand",
    image: "./assets/images/products/derand-item.svg",
    text: "A modular, chain-agnostic and cost-efficient verifiable random number generator that can be used with on-chain and off-chain tools.",
    src: "https://derand.dev/",
  },
  {
    id: 2,
    title: "AI Safe",
    image: "./assets/images/products/AIsafe.svg",
    text: (
      <>
        The first secure wallet for agents.
        <br />
        With access to trustless data, agents can interact with blockchain
        ecosystems and transact in a verifiably autonomous way.
      </>
    ),
    src: "https://x.com/Auri_agent",
  },
  {
    id: 3,
    title: "MetaBridge",
    image: "./assets/images/products/metabridge.svg",
    text: "Employing Muon as a chain-agnostic validation layer, this chain-independant bridge uses a novel approach for securing multi-chain transactions.",
    src: "https://metabridge.space/",
  },
  {
    id: 4,
    title: "LayerZero DVN",
    image: "./assets/images/products/layerzerodvn.svg",
    text: (
      <>
        A permissionless and chain-agnostic DVN <br /> (Decentralized Verifier
        Network) that leverages Muon Validation Layer to verify LayerZero
        transactions.
      </>
    ),
    src: "https://github.com/meta-bridge-protocol/muon-layer0-dvn",
  },
  {
    id: 5,
    title: "FactGPT",
    image: "./assets/images/products/factgpt.svg",
    text: `Leveraging Muon’s infrastructure, this framework allows projects to build custom prediction markets.`,
    src: "https://github.com/muon-protocol/muon-apps/blob/2058a427bb53aca0a9b00967ba5a569bd59b91d6/general/factGPT.js#L4",
  },
];

export const DiscoverMoreBtn = ({
  src,
  btnText,
  size,
}: DiscoverMoreBtnProp) => {
  return (
    <div
      onClick={() => window.open(src, "_blank")}
      className={`${
        size === "small"
          ? "!w-[196px] !h-[41px] !text-[18px] !font-normal !mt-16"
          : ""
      } group-hover  set-zIndex btn flex relative hover:text-darkText transition-all duration-300 hover-div ease-in-out`}
    >
      <span className="z-50 opacity-90 text-[11px] sm:text-sm xl:text-base above-1440:text-[18px] font-medium transition-all duration-300 ease-in-out group-hover:delay-500">
        {btnText ? btnText : "Discover More"}
      </span>
      <svg
        width="33"
        height="6"
        viewBox="0 0 33 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-fill-color"
      >
        <path d="M33 3L28 0.113251L28 5.88675L33 3ZM-4.37114e-08 3.5L28.5 3.5L28.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z" />
      </svg>
    </div>
  );
};

type AccordionItemProps = {
  item: {
    id: number;
    title: string;
    image: string;
    text: string | ReactElement;
    src: string;
  };
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const isMobile = window.innerWidth <= 640;

      const idTablet = window.innerWidth <= 768 && window.innerWidth > 640;

      const height = isOpen
        ? isMobile
          ? "436px"
          : idTablet
          ? "460px"
          : "320px"
        : "0px";

      contentRef.current.style.minHeight = height;
    }
  }, [isOpen]);

  return (
    <div className="">
      <button
        onClick={onToggle}
        className=" lg:text-[18px] above-1440:text-[23px] tracking-[1px] font-semibold text-whiteText -mt-[1px]"
      >
        <p
          className={`${
            isOpen ? "border-b-0" : ""
          } border border-darkText px-[20px] py-[12px]`}
        >
          {item.title}
        </p>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out bg-custom-gradient relative"
        style={{ maxHeight: "0px" }}
      >
        <div className="border border-darkText p-10 flex flex-col  md:flex md:flex-row items-center absolute md:pl-[82px] md:pr-[36px] top-0 left-0 right-0 bottom-0 gap-10 justify-between ">
          <img
            src={item.image}
            alt={item.title}
            className="rounded w-[300px] h-[200px] above-1440:w-[450px] above-1440:h-[154px] 1024-1279:w-[200px] custom-1280:w-[200px] above-1280:w-[310px]"
          />
          <div className="">
            <p className="text-[11px] lg:text-[15px] lg:leading-[24px] above-1440:text-[20px] font-azeretMono above-1440:leading-[32px] tracking-[1px] text-whiteText lg:max-w-[570px] above-1440:max-w-[768px]">
              {item.text}
            </p>
            <div className="flex w-full items-center justify-center lg:items-end lg:justify-end md:mt-4">
              <DiscoverMoreBtn src={item.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Products = () => {
  // const [selectedItem, setSelectedItem] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(
    items.length > 0 ? items[0].id : null
  );
  const toggleItem = (id: any) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div id="4" className="pb-[200px] sm:pb-[270px] border-b border-b-darkText">
      <BlackButton btnNum={"03"} btnText="Ecosystem" />
      <div className="section-title-text font-azeretMono hidden sm:flex">
        Muon’s versatile validation layer fuels innovative <br /> solutions
        across a wide range of use-cases. <br /> Here are some of the dApps
        built on Muon. 
      </div>
      <div className="w-full mt-20 ">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItem === item.id}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>
      {/* <div>
        <BlackButton btnNum={"03"} btnText="Ecosystem" />
        <div className="section-title-text font-azeretMono hidden sm:flex">
          Muon’s versatile validation layer fuels innovative <br /> solutions
          across a wide range of use-cases. <br /> Here are some of the dApps
          built on Muon. 
        </div>

        <div className="section-title-text font-azeretMono flex sm:hidden">
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
                ? "h-[243px] above-1440:h-[320px] below-1024:h-[450px] opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <div className="flex below-1024:flex-col w-full h-full items-center below-1024:!gap-2 gap-[50px] 1024-1279:gap-[25px]">
              <img
                className="w-[300px] h-[200px] above-1440:w-[450px] above-1440:h-[154px] 1024-1279:w-[200px] custom-1280:w-[200px] above-1280:w-[310px]"
                src="./assets/images/products/derand-item.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col sm:flex-row h-full w-full justify-end below-1024:pb-20">
              <div className="right-side w-full flex flex-col gap-5 justify-center p-5 sm:p-0 below-1024:!w-full above-1440:max-w-[694px]">
                <div className="font-azeretMono text-whiteTextSecond !leading-[32px] below-1024:!leading-5  text-[12px] sm:text-[14px] lg:text-base above-1440:text-[20px] 1024-1279:text-sm">
                  A modular, chain-agnostic and cost-efficient verifiable random
                  number generator that can be used with on-chain and off-chain
                  tools.
                </div>
                <div className="flex w-full justify-end">
                  <DiscoverMoreBtn src={"https://derand.dev/"} />
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
                ? "h-[440px] lg:h-[240px] above-1440:h-[320px] sm:h-[350px] opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full px-16 below-1024:px-4">
              <EcosystemCard
                imageSrc={"./assets/images/products/AIsafe.svg"}
                content={
                  <>
                    The first secure wallet for agents.
                    <br /> With access to trustless data, agents can interact
                    with blockchain ecosystems and transact in{" "}
                    <br className="hidden above-1440:flex" /> a verifiably
                    autonomous way.
                  </>
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
                ? "h-[440px] lg:h-[240px] above-1440:h-[320px] sm:h-[350px] opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full px-16 below-1024:px-4">
              <EcosystemCard
                imageSrc={"./assets/images/products/metabridge.svg"}
                content={
                  "Employing Muon as a chain-agnostic validation layer, this chain-independent bridge uses a novel approach for securing multi-chain transactions."
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
                ? "h-[440px] lg:h-[240px] above-1440:h-[320px] sm:h-[350px] opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full px-16 below-1024:px-4">
              <EcosystemCard
                imageSrc={"./assets/images/products/layerzerodvn.svg"}
                content={
                  <>
                    A permissionless and chain-agnostic DVN <br />{" "}
                    (Decentralized Verifier Network) that leverages Muon
                    Validation Layer to verify LayerZero transactions.
                  </>
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
                ? "h-[440px] lg:h-[240px] above-1440:h-[320px] sm:h-[350px] opacity-100"
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
      </div> */}
      <div className="mt-[100px] lg:mt-[200px]">
        <Partners />
      </div>
    </div>
  );
};

// type EcosystemCardProp = {
//   imageSrc: string;
//   content: string | ReactElement;
//   buttonSrc: string;
//   title: string;
// };

// const EcosystemCard = ({
//   title,
//   imageSrc,
//   content,
//   buttonSrc,
// }: EcosystemCardProp) => {
//   return (
//     <div className="flex below-1024:flex-col w-full items-center justify-between">
//       <div className="w-full flex justify-center lg:justify-start">
//         <img
//           className={`w-[300px] h-[200px] above-1440:w-[450px] below-1024:-mt-16 ${
//             title == "MetaBridge" ? "" : "above-1440:h-[154px]"
//           }  1024-1279:w-[200px] custom-1280:w-[200px] above-1280:w-[310px]`}
//           src={imageSrc}
//           alt=""
//         />
//       </div>
//       <div className="w-full max-w-[700px]">
//         <div className="flex flex-col sm:flex-row h-full w-full justify-end">
//           <div
//             className={`right-side w-full flex flex-col gap-5 justify-center p-5 sm:p-0 below-1024:!w-full lg:max-w-[892px] ${
//               title === "MetaBridge"
//                 ? "above-1440:max-w-[865px]"
//                 : title === "LayerZero DVN"
//                 ? "above-1440:max-w-[876px]"
//                 : "above-1440:max-w-[825px]"
//             } `}
//           >
//             <div className="font-azeretMono text-whiteTextSecond text-center md:text-left !leading-[28px] below-1024:!leading-5 text-[11px] sm:text-[14px] lg:text-base above-1440:text-[20px] 1024-1279:text-sm">
//               {content}
//             </div>
//             <div className="flex w-full justify-center lg:justify-end">
//               <DiscoverMoreBtn src={buttonSrc} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Products;
